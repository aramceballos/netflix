import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ListOfMovies from '../components/ListOfMovies'

interface IMovie {
  poster_path?: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path?: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

const Img = styled.img`
  width: 100vw;
`

const ImageContainer = styled.div`
  position: relative;
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

  useEffect(() => {
    getMovies()
  }, [])

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
          src={`https://image.tmdb.org/t/p/original${
            Math.floor(Math.random() * Math.floor(movies.length - 1)) > 0
              ? movies[
                  Math.floor(Math.random() * Math.floor(movies.length - 1))
                ]?.backdrop_path
              : ''
          }`}
          alt="cover"
          loading="lazy"
        />
      </ImageContainer>
      <Shadow />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      <ListOfMovies movies={movies} />
      {/* <ListOfMovies />
      <ListOfMovies />
      <ListOfMovies /> */}
    </div>
  )
}

export default Home
