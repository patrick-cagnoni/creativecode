import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const CardWrapper = styled(Card)`
  position: relative;
`;

export const CardName = styled.h3`
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  left: 20px;
`;

export const Content = styled.div`
  flex: 1 auto;
  align-self: center;
  text-align: center;
  font-size: 42px;
  font-weight: bold;
`;
