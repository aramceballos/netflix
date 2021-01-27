import React from 'react'
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

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1100px) {
    top: -130px;
  }

  @media screen and (min-width: 1400px) {
    top: -180px;
  }
`

const ListTitle = styled.p`
  font-size: 12px;
  margin: 0;
  padding-left: 15px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1330px) {
    font-size: 18px;
  }
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

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`

const ListOfMovies = ({ movies }: { movies: IMovie[] }) => {
  const shuffledMovies = movies
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

  return (
    <Container>
      <ListTitle>Discover Movies</ListTitle>
      <Ul>
        {shuffledMovies.map((movie: IMovie) => {
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
