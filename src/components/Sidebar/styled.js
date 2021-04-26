import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background-color: #222d32;
  width: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
  height: 100vh;
  position: fixed;
  transition: all 0.2s linear;
  color: #fff;

  @media only screen and (max-width: 720px) {
    left: ${({ isOpen }) => (isOpen ? 0 : '-250px')};
  }
`;

export const Logo = styled.div`
  line-height: 50px;
  text-align: center;
  background-color: #3c8dbc;
`;
export const UserPanel = styled.div`
  height: ${({ isOpen }) => (isOpen ? '70px' : '50px')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'block')};
  padding: ${({ isOpen }) => (isOpen ? '13px' : '5px')};
  transition: all 0.2s;
`;

export const UserPanelImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  max-width: 50px;
  transition: all 0.2s;
`;

export const UserPanelInfo = styled.div`
  margin-left: 15px;
`;

export const Navigation = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  border-left: ${({ selected }) => (selected ? '3px solid #3C8DBC' : 'none')};
  background-color: ${({ selected }) => (selected ? '#333E43' : 'inherit')};
  list-style: none !important;

  &.main-navigation-item {
    background-color: #1a2226;
    text-transform: uppercase;
    padding: 12px 5px 12px 15px;
    color: #4b646f;
    font-size: 12px;

    &:hover {
      background-color: #1a2226;
    }
  }

  &:hover {
    background-color: #333e43;
  }

  a {
    padding: ${({ isOpen }) => (isOpen ? '12px 5px 12px 15px' : '10px')};
    justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none !important;
    color: #b8c7ce;
    width: 100%;

    svg {
      margin: ${({ isOpen }) => (isOpen ? '5px' : '0')};
    }
  }
`;
