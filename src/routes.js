import React from 'react'
import App from './App';
import Profile from './Cancel';
import User from './components/User';
import { Switch, Route } from 'react-router-dom'


export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cancel" component={Profile} exact />
      <Route path="/user/:id" component={User} exact />
    </Switch>
  )
}