import {AuthToken} from '../types/user.ts';

const AUTH_TOKEN_KEY_NAME = 'AUTH_TOKEN';

export const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';
export const saveToken = (token: AuthToken) => localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
