
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import RegisterView from './components/CreateAccount/Create_View';
import todoView from './components/TodoList/todo_view';

const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginView} />
      <Route exact path='/Register' component={RegisterView} />
      <Route exact path='/todoView/:userId' component={todoView} />
    </Switch>
  </BrowserRouter >
);
export default Root;
