import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Layout from "./components/Layout"
import GlobalStyles from "./styles/GlobalStyles"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
