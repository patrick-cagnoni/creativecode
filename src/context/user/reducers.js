import * as t from './types';

export const INITIAL_STATE = {
  avatarUrl: '',
  bio: '',
  username: '',
  name: '',
  followers: 0,
  following: 0,
  diskUsage: 0,
  plan: {
    name: '',
    space: 0,
  },
  totalPrivateRepos: 0,
  publicRepos: 0,
  repos: [],
  events: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.SET_USER: {
      return { ...state, ...payload };
    }
    case t.SET_REPOS: {
      return { ...state, repos: payload };
    }
    case t.SET_EVENTS: {
      return { ...state, events: payload };
    }
    default:
      return state;
  }
}
