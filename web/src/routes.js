import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import App from './App'

function CadastroVideo() {
  return (
    <div>
      <h1>CadastroVideo</h1>
    </div>
  )
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cadastro/video" component={CadastroVideo} />

        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default Routes
