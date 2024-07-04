import { color } from '../color';
import { stylesForMultipleDevice } from '../global';

export const stylesButonBooking = {
  containerButtonBooking: {
    backgroundColor: color.topaz,
    borderRadius: 40,
    padding: 8,
    width: '90%',
    alignSelf: 'center',
    marginTop: -38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: color.carbonGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    elevation: 2,
  },
  coverIcon: {
    borderRadius: 30,
    width: 45,
    height: 45,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.white,
  },
  icon: {
    width: 30,
    height: 25,
    marginLeft: 3,
  },
  contentButtonBooking: {
    color: color.white,
    fontSize: stylesForMultipleDevice.fontSize + 6,
    fontWeight: '600',
  },
};

export const stylesButtonIconMiddle = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -46,
  },
  childrenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 50,
    width: 62,
    height: 62,
    shadowColor: color.carbonGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 3,
  },
  coverIcon: {
    backgroundColor: color.topaz,
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { marginLeft: 3, width: 23, height: 23 },
  content: { fontSize: 10, marginTop: 8 },
};

export const stylesButtonWithSelectRadio = {
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 15,
  },
  coverRadio: {
    width: 14,
    height: 14,
    borderRadius: 14,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childrenRadio: { width: 12, height: 12, borderRadius: 12, borderWidth: 2 },
  content: {
    fontSize: stylesForMultipleDevice.fontSize,
    color: color.carbonGrey,
    marginLeft: 10,
    fontWeight: 'bold',
  },
};
