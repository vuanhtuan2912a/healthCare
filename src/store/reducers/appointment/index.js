import * as ActionsTypes from '../../actions/appointment/actionTypes';

const initialState = {
  data: {},
  date: ``,
  specialty: ``,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SAVE_DATA_APPOINTMENT:
      return { ...state, data: action.value };
    case ActionsTypes.SAVE_DATE_APPOINTMENT:
      return { ...state, date: action.value };
    case ActionsTypes.SAVE_SPECIALTY_APPOINTMENT:
      return { ...state, specialty: action.value };
    default:
      return state;
  }
};
