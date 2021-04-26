import React, { useEffect } from 'react';
import Card from 'components/Card';

import { useContext } from 'context/Provider';
import { getEvents } from 'context/user';

import Activity from 'components/Activity';

import * as S from './styled';

const Main = () => {
  const {
    publicRepos,
    totalPrivateRepos: privateRepos,
    followers,
    username,
  } = useContext('userState');
  const dispatch = useContext('userDispatch');
  const {
    sidebar: { isOpen },
  } = useContext('generalState');

  useEffect(() => {
    getEvents(username)(dispatch);
  }, [username, dispatch]);

  return (
    <S.MainWrapper>
      <S.Layout sidebarOpen={isOpen}>
        <Card title="Public repos">{publicRepos}</Card>
        <Card title="Private repos">{privateRepos}</Card>
        <Card title="Followers">{followers}</Card>
        <Activity />
      </S.Layout>
    </S.MainWrapper>
  );
};

export default Main;
