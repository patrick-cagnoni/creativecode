import styled from 'styled-components';

export const DashboardWrapper = styled.div``;

export const Layout = styled.div`
  display: flex;
`;

export const Content = styled.div``;

export const MainPanel = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #eee;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '50px')};
  padding: 25px 20px;
  transition: margin-left 0.2s linear;

  @media only screen and (max-width: 720px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '0')};
    overflow-x: hidden;
  }
`;
