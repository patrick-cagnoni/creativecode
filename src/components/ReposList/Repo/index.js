import React from 'react';
import moment from 'moment';
import * as S from './styled';

const Repo = ({ name, description, language, updatedAt }) => {
  return (
    <S.RepoWrapper>
      <S.RepoName>{name}</S.RepoName>
      <S.RepoDesc>{description}</S.RepoDesc>
      <S.RepoInfo>
        {language}{' '}
        <span style={{ color: '#999', marginLeft: '20px' }}>
          last updated {moment(updatedAt).fromNow()}
        </span>
      </S.RepoInfo>
    </S.RepoWrapper>
  );
};

export default Repo;
