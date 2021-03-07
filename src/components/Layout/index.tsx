import React from 'react'

import NavBar from '../NavBar'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
