import React, { useEffect } from 'react';

import { getRepos } from 'context/user';
import { useContext } from 'context/Provider';

import ReposList from 'components/ReposList';

import * as S from './styled';

const Repos = () => {
  const {
    sidebar: { isOpen },
  } = useContext('generalState');
  const dispatch = useContext('userDispatch');

  useEffect(() => {
    getRepos()(dispatch);
  }, [dispatch]);

  return (
    <S.ReposWrapper sidebarOpen={isOpen}>
      <ReposList />
    </S.ReposWrapper>
  );
};

export default Repos;
