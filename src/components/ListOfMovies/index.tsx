import React, { Component } from 'react'
import { Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'

import MovieInfoModal from '../MovieInfoModal'
import { Container, ListTitle, Ul, ImageItem } from './styles'

const StyledSkeleton = styled(Skeleton)`
  width: 220px;
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
}

type State = {
  isModalOpen: boolean
  movieInfo: IMovie
}

class ListOfMovies extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      isModalOpen: false,
      movieInfo: {
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

  handleClick(movie: IMovie) {
    this.setState({
      isModalOpen: true,
      movieInfo: movie,
    })
  }

  handleClose() {
    this.setState({
      isModalOpen: false,
    })
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
                  <div onClick={() => this.handleClick(movie)}>
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
        <MovieInfoModal
          movie={this.state.movieInfo}
          open={this.state.isModalOpen}
          onClose={this.handleClose}
        />
      </Container>
    )
  }
}

export default ListOfMovies
