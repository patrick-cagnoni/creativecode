import { GET_USER, GET_USERS, GET_REPOS } from './config';

const getHeaders = () => {
  const storagedToken = sessionStorage.getItem('token');
  const headers = {
    Authorization: `Token ${
      storagedToken ? storagedToken : process.env.REACT_APP_TOKEN
    }`,
  };
  return headers;
};

export const getUser = () => {
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  const url = GET_USER;
  return fetch(url, options);
};

export const getRepos = (params = '?per_page=5&page=1') => {
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  const url = GET_REPOS + params;
  return fetch(url, options);
};

export const getEvents = (username) => {
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  const url = `${GET_USERS}/${username}/events`;
  return fetch(url, options);
};
