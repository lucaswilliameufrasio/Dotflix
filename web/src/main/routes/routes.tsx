import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../presentation/pages/Home'
import RegisterVideo from '../../presentation/pages/RegisterVideo'
import RegisterCategory from '../../presentation/pages/RegisterCategory'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register/video" component={RegisterVideo} />
        <Route path="/register/category" component={RegisterCategory} />

        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default Routes
