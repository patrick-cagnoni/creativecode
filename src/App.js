import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { useContext } from 'context/Provider';
import { getUser } from 'context/user';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';

import GlobalStyle from './globalStyles';

const App = () => {
  const userDispatch = useContext('userDispatch');
  const generalDispatch = useContext('generalDispatch');
  const { redirect } = useContext('generalState');
  const history = useHistory();

  useEffect(() => {
    getUser()(userDispatch, generalDispatch);
  }, [userDispatch, generalDispatch]);

  useEffect(() => {
    if (redirect) history.push(redirect);
  }, [redirect, history]);

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};

export default App;
