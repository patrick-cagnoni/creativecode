import React, { useState, useEffect } from 'react';

import { IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Repo from './Repo';

import { getRepos } from 'context/user';
import { useContext } from 'context/Provider';

import * as S from './styled';

const ReposList = () => {
  const PER_PAGE = 5;
  const { repos, totalPrivateRepos, publicRepos } = useContext('userState');
  const dispatch = useContext('userDispatch');

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const params = `?per_page=${PER_PAGE}&page=${page}`;
    getRepos(params)(dispatch);
  }, [page, dispatch]);

  useEffect(() => {
    const totalPageCount = Math.round(
      (totalPrivateRepos + publicRepos) / PER_PAGE
    );
    setPageCount(totalPageCount);
  }, [repos, totalPrivateRepos, publicRepos]);

  function nextPage() {
    if (page < pageCount) setPage(page + 1);
  }

  function previousPage() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <S.ReposListWrapper>
      <S.Title>Repos</S.Title>
      <S.Content>
        <S.List>
          {repos.map(({ name, description, language, updated_at }) => (
            <li key={name}>
              <Repo
                name={name}
                description={description}
                language={language}
                updatedAt={updated_at}
              />
            </li>
          ))}
        </S.List>
      </S.Content>
      <S.Pagination>
        page
        <IconButton onClick={previousPage}>
          <ChevronLeftIcon />
        </IconButton>
        {page}
        <IconButton onClick={nextPage}>
          <ChevronRightIcon />
        </IconButton>
        of {pageCount}
      </S.Pagination>
    </S.ReposListWrapper>
  );
};

export default ReposList;
