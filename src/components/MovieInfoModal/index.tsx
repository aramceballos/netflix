import React, { Component } from 'react'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'

import {
  Container,
  CloseButton,
  CloseIcon,
  ImageContainer,
  Img,
  ImageInfoContainer,
  Title,
  ButtonsContainer,
  PlayButton,
  PlayIcon,
  ButtonText,
  Shadow,
  InfoContainer,
  Column,
  InfoText,
  Label,
  InfoTextList,
} from './styles'

type Props = {
  movie: IMovie
  open: boolean
  onClose: () => void
}

class MovieInfoModal extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  getGenres(): string[] {
    const retGenres = []
    const movieGenres = this.props.movie.genre_ids
    const genresList = JSON.parse(
      window.localStorage.getItem('genres') as string
    )
    for (let i = 0; i < movieGenres.length; i++) {
      const genre = genresList.find(
        (g: { id: number; name: string }) => g.id === movieGenres[i]
      )
      if (genre) {
        retGenres.push(genre.name)
      }
    }
    return retGenres
  }

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        sx={{
          overflowY: 'scroll',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Fade in={this.props.open}>
          <Container>
            <CloseButton onClick={this.props.onClose}>
              <CloseIcon />
            </CloseButton>
            <ImageContainer>
              <Img
                src={`https://image.tmdb.org/t/p/original${this.props.movie.backdrop_path}`}
                alt="cover"
                loading="lazy"
              />
              <ImageInfoContainer>
                <Title>{this.props.movie.title}</Title>
                <ButtonsContainer>
                  <PlayButton>
                    <PlayIcon />
                    <ButtonText>Play</ButtonText>
                  </PlayButton>
                </ButtonsContainer>
              </ImageInfoContainer>
            </ImageContainer>
            <Shadow />
            <InfoContainer>
              <Column>
                <p>{this.props.movie.release_date.split('-')[0]}</p>
                <InfoText>{this.props.movie.overview.split('.')[0]}.</InfoText>
              </Column>
              <Column>
                <Label>Genres:</Label>
                <InfoTextList>
                  {this.getGenres().map(
                    (genre: string, index: number, arr: string[]) => (
                      <div key={index}>
                        <span>
                          {genre}
                          {index !== arr.length - 1 && ','}
                        </span>
                        <br />
                      </div>
                    )
                  )}
                </InfoTextList>
              </Column>
            </InfoContainer>
          </Container>
        </Fade>
      </Modal>
    )
  }
}

export default MovieInfoModal
