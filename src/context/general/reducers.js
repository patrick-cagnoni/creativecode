import * as t from './types';

export const INITIAL_STATE = {
  spinner: { isLoading: false },
  alert: { isOpen: false },
  sidebar: { isOpen: true },
  redirect: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.SET_LOADING: {
      return { ...state, spinner: { isLoading: payload } };
    }
    case t.SET_SIDEBAR: {
      return { ...state, sidebar: { isOpen: payload } };
    }
    case t.SET_REDIRECT: {
      return { ...state, redirect: payload };
    }
    default:
      return state;
  }
}
