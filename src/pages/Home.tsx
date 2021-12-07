import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Play, InfoCircle } from '@styled-icons/boxicons-regular'
import ListOfMovies from '../components/ListOfMovies'

const ImageContainer = styled.div`
  width: 100vw;
  height: calc(100vw * 0.5625);
  max-height: 90vh;
`

const Img = styled.img`
  width: 100vw;
  top: 0;
  object-fit: cover;
  height: calc(100vw * 0.5625);
  opacity: 0;
  transition: opacity 0.5s ease;
  max-height: 90vh;
`

const InfoContainer = styled.div`
  position: absolute;
  top: 45px;
  padding-left: 15px;

  @media screen and (min-width: 768px) {
    top: 140px;
    padding-left: 30px;
  }

  @media screen and (min-width: 925px) {
    top: 180px;
    padding-left: 35px;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 40px;
    top: 250px;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 50px;
    top: 500px;
  }
`

const Title = styled.h2`
  font-size: 28px;

  @media screen and (min-width: 480px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
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
  width: 65px;
  height: 27px;
  margin-right: 7.5px;
  cursor: pointer;
  color: #000;

  @media screen and (min-width: 768px) {
    width: 85px;
    height: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 110px;
    height: 40px;
  }

  @media screen and (min-width: 1920px) {
    width: 140px;
    height: 55px;
  }
`

const InfoButton = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  width: 90px;
  height: 27px;
  margin-right: 5px;
  justify-content: space-evenly;
  padding: 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 115px;
    height: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 140px;
    height: 40px;
  }

  @media screen and (min-width: 1920px) {
    width: 200px;
    height: 55px;
  }
`

const InfoIcon = styled(InfoCircle)`
  color: #fff;
  margin-right: 2px;
`

const ButtonPlayText = styled.span`
  font-size: 11px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
`

const ButtonInfoText = styled.span`
  font-size: 11px;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
`

const Shadow = styled.div`
  width: 100%;
  -webkit-appearance: none;
  box-shadow: 0px 0px 20px 30px #141414;
  -webkit-box-shadow: 0px 0px 20px 30px #141414;
  position: relative;
  z-index: 2;
  height: 1px;
  background-color: #141414;
`

const ListsContainer = styled.div`
  top: -40px;
  & > div > * {
    padding-left: 15px;
  }
  position: relative;

  @media screen and (min-width: 768px) {
    top: -60px;
    & > div > * {
      padding-left: 30px;
    }
  }

  @media screen and (min-width: 925px) {
    & > div > * {
      padding-left: 35px;
    }
  }

  @media screen and (min-width: 1200px) {
    & > div > * {
      padding-left: 40px;
    }
  }

  @media screen and (min-width: 1920px) {
    top: -90px;
    & > div > * {
      padding-left: 50px;
    }
  }
`

enum ScreenSize {
  Mobile = 480,
  Tablet = 768,
  Laptop = 1200,
  Desktop = 1920,
}

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [randomMovie, setRandomMovie] = useState<IMovie>()
  const [size, setSize] = useState<ScreenSize>()

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    if (window.innerWidth <= ScreenSize.Mobile) {
      setSize(ScreenSize.Mobile)
    } else if (window.innerWidth <= ScreenSize.Tablet) {
      setSize(ScreenSize.Tablet)
    } else if (window.innerWidth <= ScreenSize.Desktop) {
      setSize(ScreenSize.Laptop)
    } else {
      setSize(ScreenSize.Desktop)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= ScreenSize.Mobile) {
        setSize(ScreenSize.Mobile)
      } else if (window.innerWidth <= ScreenSize.Tablet) {
        setSize(ScreenSize.Tablet)
      } else if (window.innerWidth <= ScreenSize.Desktop) {
        setSize(ScreenSize.Laptop)
      } else {
        setSize(ScreenSize.Desktop)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
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
          onLoad={(ev) => {
            ev.currentTarget.style.opacity = '1'
          }}
        />
        <InfoContainer>
          <Title>{randomMovie?.title}</Title>
          <ButtonsContainer>
            <PlayButton>
              <Play
                width={
                  size === ScreenSize.Mobile
                    ? 25
                    : size === ScreenSize.Tablet
                    ? 30
                    : size === ScreenSize.Laptop
                    ? 40
                    : size === ScreenSize.Desktop
                    ? 50
                    : 35
                }
              />
              <ButtonPlayText>Play</ButtonPlayText>
            </PlayButton>
            <InfoButton>
              <InfoIcon
                width={
                  size === ScreenSize.Mobile
                    ? 19
                    : size === ScreenSize.Tablet
                    ? 19
                    : size === ScreenSize.Laptop
                    ? 27
                    : size === ScreenSize.Desktop
                    ? 35
                    : 19
                }
              />
              <ButtonInfoText>More Info</ButtonInfoText>
            </InfoButton>
          </ButtonsContainer>
        </InfoContainer>
      </ImageContainer>
      <Shadow />
      <ListsContainer>
        <ListOfMovies movies={movies} />
        <ListOfMovies movies={movies} />
        <ListOfMovies movies={movies} />
        <ListOfMovies movies={movies} />
        <ListOfMovies movies={movies} />
        <ListOfMovies movies={movies} />
      </ListsContainer>
    </div>
  )
}

export default Home
