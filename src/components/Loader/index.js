import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

const Loader = ({ isLoading }) => {
  const style = css`
    position: absolute;
    top: calc(50% - 17.5px);
    left: calc(50% - 17.5px);
  `;
  return <ClipLoader loading={isLoading} css={style} />;
};

export default Loader;
