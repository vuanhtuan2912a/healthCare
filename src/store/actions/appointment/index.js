import * as ActionsTypes from './actionTypes';

export const saveDataAppointment = value => ({
  type: ActionsTypes.SAVE_DATA_APPOINTMENT,
  value,
});

export const saveDateAppointment = value => ({
  type: ActionsTypes.SAVE_DATE_APPOINTMENT,
  value,
});

export const saveSpecialtyAppointment = value => ({
  type: ActionsTypes.SAVE_SPECIALTY_APPOINTMENT,
  value,
});
