import React, { useState } from 'react';

import { Box, Button } from '@material-ui/core';

import { useContext } from 'context/Provider';
import { getUser } from 'context/user';

import * as S from './styled';

const Login = () => {
  const [token, setToken] = useState('');
  const userDispatch = useContext('userDispatch');
  const generalDispatch = useContext('generalDispatch');

  function login() {
    sessionStorage.setItem('token', token);
    getUser()(userDispatch, generalDispatch);
  }

  return (
    <S.LoginWrapper maxWidth="md">
      <S.PageTitle>Login</S.PageTitle>
      <Box textAlign="center">Insert a valid Access Token to login</Box>
      <S.LoginForm>
        <S.FormInput
          placeholder="Access Token"
          onChange={(e) => setToken(e.target.value)}
          value={token}
        />
        <Button variant="contained" color="primary" onClick={login}>
          Login
        </Button>
      </S.LoginForm>
    </S.LoginWrapper>
  );
};

export default Login;
