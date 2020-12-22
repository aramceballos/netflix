import React from "react"

import NavBar from "./NavBar"

interface Props {
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
