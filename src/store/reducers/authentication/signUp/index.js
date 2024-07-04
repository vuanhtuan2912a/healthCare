import * as actionTypes from '../../../actions/authentication/signUp/actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DATA_REGISTER:
      console.log('SAVE_DATA_REGISTER', action);
      return { ...state, data: action.value, loading: false, error: null };
    default:
      return state;
  }
};

export default signUpReducer;
