import React from 'react';
import moment from 'moment';
import { Box } from '@material-ui/core';

import * as S from './styled';

const Event = ({ actor, createdAt, commits, repoName, type }) => {
  return (
    <S.EventWrapper>
      <Box display="flex" alignItems="center">
        <S.RepoName>{repoName}</S.RepoName>
        <S.Commits>{commits ? `${commits} commits` : null}</S.Commits>
        <S.EventType>{type}</S.EventType>
      </Box>
      <S.EventActor>
        created by {actor} {moment(createdAt).fromNow()}
      </S.EventActor>
    </S.EventWrapper>
  );
};

export default Event;
