import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';

import { useContext } from 'context/Provider';

import * as S from './styled';

const Sidebar = ({ isOpen }) => {
  const { avatarUrl, username, name } = useContext('userState');
  const path = useLocation().pathname;
  return (
    <S.SidebarWrapper isOpen={isOpen}>
      <S.Logo>{isOpen ? 'CreativeCode Test' : 'CCT'}</S.Logo>
      <S.UserPanel isOpen={isOpen}>
        <S.ImgWrapper>
          <S.UserPanelImg src={avatarUrl} isOpen={isOpen} />
        </S.ImgWrapper>
        <S.UserPanelInfo>
          {isOpen ? (name ? name : username) : null}
        </S.UserPanelInfo>
      </S.UserPanel>
      <S.Navigation>
        {isOpen ? (
          <S.NavigationItem className="main-navigation-item">
            Main navigation
          </S.NavigationItem>
        ) : null}
        <S.NavigationItem selected={path === '/'} isOpen={isOpen}>
          <Link to="/">
            <DashboardIcon fontSize="small" /> {isOpen ? 'Dashboard' : null}
          </Link>
        </S.NavigationItem>
        <S.NavigationItem selected={path === '/repos'} isOpen={isOpen}>
          <Link to="/repos">
            <StorageIcon fontSize="small" /> {isOpen ? 'Repos' : null}
          </Link>
        </S.NavigationItem>
      </S.Navigation>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
