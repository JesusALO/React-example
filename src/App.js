import React from 'react'
import Layout from "./pages/Layout/Layout"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "./pages/main/Main"
import NewBadge from './pages/NewBadge/NewBadge'
import Sign_up from './components/Sign_up'
import Log_in from './components/Log_in'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/sign_up" component={Sign_up}></Route>
          <Route exact path="/log_in" component={Log_in}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
