import styled from 'styled-components';

export const ReposWrapper = styled.div`
  @media only screen and (max-width: 720px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? '720px' : '100%')};
  }
`;
