import * as t from './types';

export const setLoading = (isLoading) => ({
  type: t.SET_LOADING,
  payload: isLoading,
});

export const setSidebar = (isOpen) => ({
  type: t.SET_SIDEBAR,
  payload: isOpen,
});
export const setRedirect = (redirect) => ({
  type: t.SET_REDIRECT,
  payload: redirect,
});
