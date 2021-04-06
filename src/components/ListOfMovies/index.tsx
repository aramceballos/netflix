import React, { useState } from 'react'
import MovieInfoModal from '../MovieInfoModal'

import { Container, ListTitle, Ul, ImageItem } from './styles'

type Props = {
  movies: IMovie[]
}

const ListOfMovies = ({ movies }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [movieInfo, setMovieInfo] = useState<IMovie | null>(null)

  const shuffledMovies = movies
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

  const handleClick = (movie: IMovie) => {
    setIsModalOpen(true)
    setMovieInfo(movie)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

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
              <div onClick={() => handleClick(movie)}>
                <ImageItem
                  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
            </li>
          )
        })}
      </Ul>
      <MovieInfoModal
        movie={movieInfo}
        open={isModalOpen}
        onClose={handleClose}
      />
    </Container>
  )
}

export default ListOfMovies
