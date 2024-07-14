import * as ActionsTypes from '../../actions/appointment/actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SAVE_DATA_APPOINTMENT:
      return { ...state, data: action.value };
    default:
      return state;
  }
};
