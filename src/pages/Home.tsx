import React from 'react'
import styled from 'styled-components'
import ListOfMovies from '../components/ListOfMovies'

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
  return (
    <div>
      <ImageContainer>
        <Img
          src="https://occ-0-4406-33.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTDv9qj-JuKjRQN1RDhdh0mLuivsozxX4nD9seSZl-7YAjzYbysssmdsBEmqFNSkN-eZf5t_5J7gLXbFWI2yKRp0znxM.webp?r=c36"
          alt="cover"
        />
      </ImageContainer>
      <Shadow />
      <ListOfMovies type="discover" />
      <ListOfMovies type="trending" />
      {/* <ListOfMovies />
      <ListOfMovies />
      <ListOfMovies /> */}
    </div>
  )
}

export default Home
