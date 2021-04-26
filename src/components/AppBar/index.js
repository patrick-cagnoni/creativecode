import React from 'react';
import { useLocation } from 'react-router';

import { Box, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';

import { useContext } from 'context/Provider';
import { setSidebar } from 'context/general';

import * as S from './styled';

const AppBar = () => {
  const {
    sidebar: { isOpen: sidebarOpen },
  } = useContext('generalState');
  const generalDispatch = useContext('generalDispatch');
  const page = useLocation().pathname.replace('/', '');

  function toggleSidebar() {
    generalDispatch(setSidebar(!sidebarOpen));
  }

  return (
    <S.AppBarWrapper>
      <Box display="flex" alignItems="center">
        <S.IconButton
          aria-label="minimize-sidebar"
          size="medium"
          variant="contained"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <MoreVertIcon fontSize="inherit" />
          ) : (
            <ViewListIcon fontSize="inherit" />
          )}
        </S.IconButton>
        <S.PageName>{page ? page : 'dashboard'}</S.PageName>
      </Box>
      <IconButton>
        <PersonIcon />
      </IconButton>
    </S.AppBarWrapper>
  );
};

export default AppBar;
