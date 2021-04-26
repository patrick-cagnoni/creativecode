import styled from 'styled-components';
import CardBase from 'components/Card';

export const MainWrapper = styled.div`
  height: 100%;
`;

export const Card = styled(CardBase)``;

export const Layout = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 220px);
  grid-template-columns: 1fr 3fr;
  column-gap: 15px;
  row-gap: 10px;
  height: 90%;

  @media only screen and (max-width: 720px) {
    grid-template-rows: repeat(3, 200px) 1fr;
    grid-template-columns: ${({ sidebarOpen }) =>
      sidebarOpen ? '720px' : '1fr'};
  }
`;

export const Stats = styled.div`
  grid-column: 1/2;
`;
