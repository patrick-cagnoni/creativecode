import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const ReposListWrapper = styled(Card)``;

export const Title = styled.h2`
  margin: 0;
  padding: 10px;
`;

export const Content = styled.div`
  overflow-y: auto !important;
  padding: 0 20px;
  height: 680px;

  @media only screen and (max-width: 720px) {
    height: auto;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 40px;
  -webkit-box-shadow: 0px -3px 8px 1px rgba(0, 0, 0, 0.35);
  box-shadow: 0px -3px 8px 1px rgba(0, 0, 0, 0.35);

  @media only screen and (max-width: 720px) {
    justify-content: center;
  }
`;
