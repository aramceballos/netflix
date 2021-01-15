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
  top: -30px;
  z-index: 2;
  position: relative;
`

const ListTitle = styled.p`
  font-size: 12px;
  margin: 0;
  padding-left: 15px;
`

const Ul = styled.ul`
  list-style: none;
  overflow-x: scroll;
  display: flex;
  padding: 0;
  margin: 7px 0;
  padding-left: 15px;
`

const ImageItem = styled.img`
  max-width: 170px;
  border-radius: 4px;
  margin-right: 4px;
`

const ListOfMovies = ({ type }: { type: string }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const BASE_URL = 'https://api.themoviedb.org/3'

  let endpoint = ''
  let title = ''

  switch (type) {
    case 'discover':
      title = 'Discover Movies'
      endpoint = '/discover/movie?api_key=55b7d17bbf2598297dd0d3af358dca8c'
      break

    case 'trending':
      title = 'Trending'
      endpoint = '/trending/all/day?api_key=55b7d17bbf2598297dd0d3af358dca8c'
      break

    default:
      break
  }

  const getMovies = async () => {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`)
      const data = await res.json()

      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ListTitle>{title}</ListTitle>
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
