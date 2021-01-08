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
  position: absolute;
  width: 131%;
  height: 100%;
  box-shadow: inset 0px -20px 20px 8px #141414;
  top: 0px;
  left: -36px;
`

const Home = () => {
  return (
    <div>
      <ImageContainer>
        <Img
          src="https://occ-0-4406-33.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTDv9qj-JuKjRQN1RDhdh0mLuivsozxX4nD9seSZl-7YAjzYbysssmdsBEmqFNSkN-eZf5t_5J7gLXbFWI2yKRp0znxM.webp?r=c36"
          alt="cover"
        />
        <Shadow />
      </ImageContainer>
      <ListOfMovies />
    </div>
  )
}

export default Home
