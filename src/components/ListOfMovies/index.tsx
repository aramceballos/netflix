import React from 'react'

import { Container, ListTitle, Ul, ImageItem } from './styles'

type Props = {
  movies: IMovie[]
}

const ListOfMovies = ({ movies }: Props) => {
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
                  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
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
