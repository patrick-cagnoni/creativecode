import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useContext } from 'context/Provider';

import Main from 'pages/Main';
import Repos from 'pages/Repos';

import Loader from 'components/Loader';
import AppBar from 'components/AppBar';
import Sidebar from 'components/Sidebar';

import * as S from './styled';

const Dashboard = () => {
  const {
    spinner: { isLoading },
    sidebar: { isOpen },
  } = useContext('generalState');

  return (
    <S.DashboardWrapper>
      <Loader isLoading={isLoading} />
      {!isLoading ? (
        <S.Layout>
          <Sidebar isOpen={isOpen} />
          <S.MainPanel sidebarOpen={isOpen}>
            <AppBar />
            <S.Content>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/repos" component={Repos} />
              </Switch>
            </S.Content>
          </S.MainPanel>
        </S.Layout>
      ) : null}
    </S.DashboardWrapper>
  );
};

export default Dashboard;
