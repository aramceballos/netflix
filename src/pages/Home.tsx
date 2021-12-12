import React, { Component } from 'react'
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

const PlayIcon = styled(Play)`
  width: 25px;

  @media screen and (min-width: 768px) {
    width: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 40px;
  }

  @media screen and (min-width: 1920px) {
    width: 50px;
  }
`

const InfoIcon = styled(InfoCircle)`
  color: #fff;
  margin-right: 2px;
  width: 19px;

  @media screen and (min-width: 1200px) {
    width: 27px;
  }

  @media screen and (min-width: 1920px) {
    width: 35px;
  }
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

type Props = {}

type State = {
  movies: IMovie[]
  randomMovie: IMovie
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      movies: [],
      randomMovie: {
        adult: false,
        backdrop_path: '',
        genre_ids: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    }
  }

  async getMovies() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=55b7d17bbf2598297dd0d3af358dca8c'
      )
      const data = await res.json()

      this.setState({
        movies: data.results,
      })
    } catch (error) {
      console.error(error)
    }
  }

  getRandomMovie() {
    this.setState({
      randomMovie:
        this.state.movies[
          Math.floor(Math.random() * this.state.movies.length - 1)
        ],
    })
  }

  componentDidMount() {
    this.getMovies().then(() => this.getRandomMovie())
  }

  render() {
    return (
      <div>
        <ImageContainer>
          <Img
            src={`https://image.tmdb.org/t/p/original${this.state.randomMovie.backdrop_path}`}
            alt="cover"
            loading="lazy"
            onLoad={(ev) => {
              ev.currentTarget.style.opacity = '1'
            }}
          />
          <InfoContainer>
            <Title>{this.state.randomMovie.title}</Title>
            <ButtonsContainer>
              <PlayButton>
                <PlayIcon />
                <ButtonPlayText>Play</ButtonPlayText>
              </PlayButton>
              <InfoButton>
                <InfoIcon />
                <ButtonInfoText>More Info</ButtonInfoText>
              </InfoButton>
            </ButtonsContainer>
          </InfoContainer>
        </ImageContainer>
        <Shadow />
        <ListsContainer>
          <ListOfMovies title="Recommended Movies" movies={this.state.movies} />
          <ListOfMovies title="Trending Now" movies={this.state.movies} />
          <ListOfMovies title="Popular on Netflix" movies={this.state.movies} />
          <ListOfMovies title="Casual Viewing" movies={this.state.movies} />
          <ListOfMovies title="Sci-Fi Movies" movies={this.state.movies} />
          <ListOfMovies title="Action & Adventure" movies={this.state.movies} />
        </ListsContainer>
      </div>
    )
  }
}

export default Home
