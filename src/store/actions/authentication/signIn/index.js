import * as ActionsTypes from './actionTypes';

export const getValidatePhone = value => ({
  type: ActionsTypes.GET_VALIDATE_PHONE,
  value,
});

export const getValidatePassword = value => ({
  type: ActionsTypes.GET_VALIDATE_PASSWORD,
  value,
});

export const checkLogin = value => ({
  type: ActionsTypes.CHECK_LOGIN,
  value,
});

export const signIn = value => ({
  type: ActionsTypes.SIGN_IN,
  value,
});
