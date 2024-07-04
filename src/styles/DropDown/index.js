import { color } from '../color';
import { stylesForMultipleDevice } from '../global';

export const stylesDropDownButton = {
  container: {
    backgroundColor: color.white,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  buttonShowItemSelected: {
    width: '100%',
    height: stylesForMultipleDevice.heightButton,
    borderRadius: 6,
    backgroundColor: color.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    shadowColor: color.carbonGrey,
    shadowOffset: { width: 0, height: 1.5 },
    shadowRadius: 1,
    elevation: 3,
    shadowOpacity: 0.7,
    backgroundColor: color.white,
  },
  content: {
    fontSize: stylesForMultipleDevice.fontSize,
    color: color.carbonGrey,
    lineHeight: stylesForMultipleDevice.heightButton,
  },
  icon: {
    width: 15,
    height: 15,
  },
  containerDropDown: {
    width: '100%',
    shadowColor: color.carbonGrey,
    shadowOffset: { width: 0, height: 1.5 },
    shadowRadius: 1,
    elevation: 3,
    shadowOpacity: 0.7,
    backgroundColor: color.white,
    borderRadius: 6,
    marginTop: 10,
  },
};

export const stylesDropDownDate = {
  container: {
    backgroundColor: color.white,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  buttonShowCalendar: {
    width: '100%',
    height: stylesForMultipleDevice.heightButton,
    borderRadius: 6,
    backgroundColor: color.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    shadowColor: color.carbonGrey,
    shadowOffset: { width: 0, height: 1.5 },
    shadowRadius: 1,
    elevation: 3,
    shadowOpacity: 0.7,
    backgroundColor: color.white,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  containerCalendar: {
    width: '100%',
    shadowColor: color.carbonGrey,
    shadowOffset: { width: 0, height: 1.5 },
    shadowRadius: 1,
    elevation: 3,
    shadowOpacity: 0.7,
    backgroundColor: color.white,
    borderRadius: 6,
    marginTop: 10,
    padding: 10,
  },
};
