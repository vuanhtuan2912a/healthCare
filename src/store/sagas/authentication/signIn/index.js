import * as ActionsTypes from '../../../actions/authentication/signIn/actionTypes';

const initialState = {
  isLogin: false,
  isValidatePhone: null,
  isValidatePassword: null,
  isPhoneValid: null,
  isPasswordInvalid: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.GET_VALIDATE_PHONE:
      return { ...state, isValidatePhone: action.value };
    case ActionsTypes.GET_VALIDATE_PASSWORD:
      return { ...state, isValidatePassword: action.value };
    default:
      return state;
  }
};
