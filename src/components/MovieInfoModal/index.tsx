import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
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
  movie: IMovie | null
  open: boolean
  onClose: () => void
}

const MovieInfoModal = ({ movie, open, onClose }: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Container>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <ImageContainer>
            <Img
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt="cover"
              loading="lazy"
            />
            <ImageInfoContainer>
              <Title>{movie?.title}</Title>
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
              <InfoText>{movie?.release_date.split('-')[0]}</InfoText>
              <InfoText>{movie?.overview}</InfoText>
            </LeftContent>
          </InfoContainer>
        </Container>
      </Fade>
    </Modal>
  )
}

export default MovieInfoModal
