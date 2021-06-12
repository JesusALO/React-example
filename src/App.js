import React from 'react'
import Layout from "./pages/Layout/Layout"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "./pages/Main/Main"
import NewBadge from './pages/NewBadge/NewBadge'
import Badges from "./pages/Badges/Badges"
import BadgeDetails from "./components/BadgeDetails"
import NotFound from "./pages/NotFound/NotFound"
import Sign_up from './components/Sign_up'
import Log_in from './components/Log_in'
import None from './components/none'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/sign_up" component={Sign_up}></Route>
          <Route exact path="/log_in" component={Log_in}></Route>
          <Route exact path="/none" component={None}></Route>
          <Route exact path="/badges" component={Badges}></Route>¨
          <Route exact path="/:badgeId" component={BadgeDetails}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
