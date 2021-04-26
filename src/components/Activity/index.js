import React from 'react';
import { CardContent } from '@material-ui/core';
import { useContext } from 'context/Provider';
import Event from './Event';

import * as S from './styled';

const Activity = () => {
  const { events } = useContext('userState');
  return (
    <S.ActivityWrapper>
      <CardContent>
        <h2>Events</h2>
        <S.List>
          {events.map(
            (
              {
                actor: { login },
                created_at,
                payload: { commits },
                repo: { name },
                type,
              },
              index
            ) => (
              <li key={index}>
                <Event
                  actor={login}
                  createdAt={created_at}
                  commits={commits ? commits.length : null}
                  repoName={name}
                  type={type}
                />
              </li>
            )
          )}
        </S.List>
      </CardContent>
    </S.ActivityWrapper>
  );
};

export default Activity;
