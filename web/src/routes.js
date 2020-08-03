import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import CadastroVideo from './pages/CadastroVideo'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro/video" component={CadastroVideo} />

        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default Routes
