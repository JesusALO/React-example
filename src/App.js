import React from 'react'
import Layout from "./pages/Layout/Layout"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "./pages/main/Main"
import Badge from "./components/Badge"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={Badge}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
