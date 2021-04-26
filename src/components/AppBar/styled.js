import styled from 'styled-components';

import IconButtonBase from '@material-ui/core/IconButton';

export const AppBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const IconButton = styled(IconButtonBase)`
  background-color: #fff !important;
`;

export const PageName = styled.div`
  text-transform: capitalize;
  margin-left: 10px;
`;
