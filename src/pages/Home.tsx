import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Play, InfoCircle } from '@styled-icons/boxicons-regular'
import ListOfMovies from '../components/ListOfMovies'

const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const InfoContainer = styled.div`
  position: absolute;
  top: 56px;
  padding-left: 15px;

  @media screen and (min-width: 768px) {
    top: 100px;
  }
`

const Title = styled.h2`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`

const Img = styled.img`
  width: 100vw;
  position: absolute;
  top: 0;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const PlayButton = styled.button`
  background-color: #fff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  width: 60px;
  height: 22px;
  margin-right: 5px;
  cursor: pointer;
`

const InfoButton = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  width: 80px;
  height: 22px;
  margin-right: 5px;
  justify-content: space-around;
  padding: 5px;
  cursor: pointer;
`

const InfoIcon = styled(InfoCircle)`
  color: #fff;
  margin-right: 2px;
`

const ButtonText = styled.span`
  font-size: 10px;
`

const ButtonInfoText = styled.span`
  font-size: 10px;
  color: #fff;
`

const Shadow = styled.div`
  width: 100%;
  -webkit-appearance: none;
  box-shadow: 0px 0px 20px 20px #141414;
  -webkit-box-shadow: 0px 0px 20px 20px #141414;
  position: relative;
  z-index: 2;
  height: 1px;
  background-color: #141414;
`

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [randomMovie, setRandomMovie] = useState<IMovie>()

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    getRandomMovie()
  }, [movies])

  const getRandomMovie = () => {
    Math.floor(Math.random() * Math.floor(movies.length - 1)) > 0 &&
      setRandomMovie(
        movies[Math.floor(Math.random() * Math.floor(movies.length - 1))]
      )
  }

  const getMovies = async () => {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=55b7d17bbf2598297dd0d3af358dca8c'
      )
      const data = await res.json()

      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <ImageContainer>
        <Img
          src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
          alt="cover"
          loading="lazy"
        />
        <InfoContainer>
          <Title>{randomMovie?.title}</Title>
          <ButtonsContainer>
            <PlayButton>
              <Play width={20} />
              <ButtonText>Play</ButtonText>
            </PlayButton>
            <InfoButton>
              <InfoIcon width={14} />
              <ButtonInfoText>More Info</ButtonInfoText>
            </InfoButton>
          </ButtonsContainer>
        </InfoContainer>
      </ImageContainer>
      <Shadow />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
    </div>
  )
}

export default Home
