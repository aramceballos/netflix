import React, { Component } from 'react'
import { Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'

import { Container, ListTitle, Ul, ImageItem } from './styles'

const StyledSkeleton = styled(Skeleton)`
  width: 146px;
  padding-bottom: 56.25%;
  border-radius: 1px;
  margin-right: 2px;

  @media screen and (min-width: 768px) {
    width: 230px;
  }

  @media screen and (min-width: 925px) {
    width: 210px;
    border-radius: 3px;
    margin-right: 3px;
  }

  @media screen and (min-width: 1200px) {
    width: 210px;
    border-radius: 4px;
    margin-right: 4px;
  }

  @media screen and (min-width: 1920px) {
    width: 295px;
    margin-right: 6px;
  }
`

type Props = {
  title: string
  movies: IMovie[]
  loading: boolean
  onClick: (movie: IMovie) => void
}

class ListOfMovies extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.loading !== this.props.loading ||
      nextProps.movies !== this.props.movies
    )
  }

  render() {
    const shuffledMovies = this.props.movies
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)

    return (
      <Container>
        <ListTitle>{this.props.title}</ListTitle>
        <Ul>
          {this.props.loading ? (
            <>
              <li>
                <StyledSkeleton
                  style={{ backgroundColor: '#212121', marginRight: 4 }}
                  animation="wave"
                  variant="rectangular"
                />
              </li>
              <li>
                <StyledSkeleton
                  style={{ backgroundColor: '#212121', marginRight: 4 }}
                  animation="wave"
                  variant="rectangular"
                />
              </li>
              <li>
                <StyledSkeleton
                  style={{ backgroundColor: '#212121', marginRight: 4 }}
                  animation="wave"
                  variant="rectangular"
                />
              </li>
              <li>
                <StyledSkeleton
                  style={{ backgroundColor: '#212121', marginRight: 4 }}
                  animation="wave"
                  variant="rectangular"
                />
              </li>
              <li>
                <StyledSkeleton
                  style={{ backgroundColor: '#212121', marginRight: 4 }}
                  animation="wave"
                  variant="rectangular"
                />
              </li>
            </>
          ) : (
            shuffledMovies.map((movie: IMovie) => {
              if (!movie.backdrop_path) {
                return
              }

              return (
                <li key={movie.id}>
                  <div onClick={() => this.props.onClick(movie)}>
                    <ImageItem
                      src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                      alt={movie.title}
                    />
                  </div>
                </li>
              )
            })
          )}
        </Ul>
      </Container>
    )
  }
}

export default ListOfMovies
