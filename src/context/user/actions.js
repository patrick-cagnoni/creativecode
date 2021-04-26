import * as api from 'api/github';
import * as t from './types';
import { setLoading, setRedirect } from 'context/general';

const setUser = (user) => ({
  type: t.SET_USER,
  payload: user,
});

const setRepos = (repos) => ({
  type: t.SET_REPOS,
  payload: repos,
});

const setEvents = (events) => ({
  type: t.SET_EVENTS,
  payload: events,
});

export const getUser = () => (userDispatch, generalDispatch) => {
  generalDispatch(setLoading(true));
  api
    .getUser()
    .then((response) => response.json())
    .then((parsedRes) => {
      if (parsedRes.message) {
        generalDispatch(setLoading(false));
        generalDispatch(setRedirect('/login'));
        return;
      }

      const {
        avatar_url,
        bio,
        login,
        name,
        followers,
        following,
        disk_usage,
        plan,
        total_private_repos,
        public_repos,
      } = parsedRes;

      const user = {
        avatarUrl: avatar_url,
        bio,
        username: login,
        name,
        followers,
        following,
        diskUsage: disk_usage,
        plan,
        totalPrivateRepos: total_private_repos,
        publicRepos: public_repos,
      };
      userDispatch(setUser(user));
      generalDispatch(setLoading(false));
    });
};

export const getRepos = (params) => (dispatch) => {
  api
    .getRepos(params)
    .then((response) => response.json())
    .then((parsedRes) => {
      dispatch(setRepos(parsedRes));
    });
};

export const getEvents = (username) => (dispatch) => {
  if (!username) return null;
  api
    .getEvents(username)
    .then((response) => response.json())
    .then((parsedRes) => {
      dispatch(setEvents(parsedRes));
    });
};
