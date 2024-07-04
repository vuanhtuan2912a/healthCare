import { userInformationFake } from '../../../../fakeData';
import * as actionTypes from '../../../actions/authentication/signIn/actionTypes';

const initialState = {
  data: userInformationFake,
  loading: false,
  error: null,
  isLogin: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VALIDATE_PHONE:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_VALIDATE_PASSWORD:
      return { ...state, loading: false, data: null };
    case actionTypes.CHECK_LOGIN:
      return { ...state, isLogin: action.value };
    case actionTypes.SIGN_IN:
      return { ...state, isLogin: action.value };
    default:
      return state;
  }
};

export default signInReducer;
