import React, { Component } from 'react'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'
import { Play } from '@styled-icons/boxicons-regular'

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
  ButtonText,
  Shadow,
  InfoContainer,
  InfoText,
  LeftContent,
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

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
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
                    <Play width={20} />
                    <ButtonText>Play</ButtonText>
                  </PlayButton>
                </ButtonsContainer>
              </ImageInfoContainer>
            </ImageContainer>
            <Shadow />
            <InfoContainer>
              <LeftContent>
                <InfoText>
                  {this.props.movie.release_date.split('-')[0]}
                </InfoText>
                <InfoText>{this.props.movie.overview}</InfoText>
              </LeftContent>
            </InfoContainer>
          </Container>
        </Fade>
      </Modal>
    )
  }
}

export default MovieInfoModal
