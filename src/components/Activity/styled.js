import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const ActivityWrapper = styled(Card)`
  overflow: auto !important;
  grid-row: 1/4;
  grid-column: 2/3;

  @media only screen and (max-width: 720px) {
    grid-row: 4/5;
    grid-column: 1/2;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
