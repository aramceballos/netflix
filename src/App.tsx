import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  const getGenres = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=55b7d17bbf2598297dd0d3af358dca8c'
      )
      const data = await response.json()
      window.localStorage.setItem('genres', JSON.stringify(data.genres))
    } catch (error) {
      console.error(error)
    }
  }
  const genres = window.localStorage.getItem('genres')
  if (!genres) {
    getGenres()
  }
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
