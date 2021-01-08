import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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

const Container = styled.div`
  margin-top: -104px;
  z-index: 2;
  position: relative;
  padding-left: 40px;
`

const ListTitle = styled.p`
  font-size: 13px;
  margin: 0;
`

const Ul = styled.ul`
  list-style: none;
  overflow-x: scroll;
  display: flex;
  padding: 0;
  margin: 7px 0;
`

const ImageItem = styled.img`
  max-width: 200px;
  border-radius: 4px;
  margin-right: 4px;
`

const ListOfMovies = () => {
  const [movies, setMovies] = useState([])

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
    <Container>
      <ListTitle>Discover Movies</ListTitle>
      <Ul>
        {movies.map((movie: IMovie) => {
          if (!movie.backdrop_path) {
            return
          }

          return (
            <li key={movie.id}>
              <div>
                <ImageItem
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
            </li>
          )
        })}
      </Ul>
    </Container>
  )
}

export default ListOfMovies
