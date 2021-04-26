import React from 'react';

import * as S from './styled';

const Card = ({ title, children, style }) => {
  return (
    <S.CardWrapper style={style}>
      <div style={{ display: 'flex', height: '100%' }}>
        <S.CardName>{title}</S.CardName>
        <S.Content>{children}</S.Content>
      </div>
    </S.CardWrapper>
  );
};

export default Card;
