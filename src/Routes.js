import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './pathes'
import Login from './page/Login'
import Registration from './page/Registration'
import Home from './page/Home'
import Movie from './components/Movie'

const Routes = memo(() => (
  <Switch>
    <Route exact path={routes.HOME} component={Home} />
    <Route path={routes.LOGIN} component={Login} />
    <Route path={routes.REGISTRATION} component={Registration} />
    <Route path={routes.MOVIE_ID} component={Movie} />
    <Route render={() => <h1>4o4</h1>} />
  </Switch>
))

export default Routes