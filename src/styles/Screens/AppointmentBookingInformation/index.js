import { color } from '../../color';
import { stylesForMultipleDevice } from '../../global';

export const stylesAppointmentBookingInformation = {
  title: {
    fontSize: stylesForMultipleDevice.fontSize,
    color: color.carbonGrey,
    marginLeft: 15,
    fontStyle: 'italic',
    marginTop: 15,
  },
  titleService: {
    fontSize: stylesForMultipleDevice.fontSize,
    color: color.carbonGrey,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  containerTitleService: {
    flexDirection: 'row',
    marginTop: 15,
    borderWidth: 1,
    borderColor: color.lightGrey,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  containerBody: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: color.lightGrey,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  containerTotal: {
    borderWidth: 1,
    borderColor: color.lightGrey,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 6,
    marginTop: 15,
  },
  totalText: {
    marginLeft: 15,
    color: color.carbonGrey,
    fontWeight: 'bold',
  },
  totalMoney: {
    marginLeft: 15,
    color: color.topaz,
    fontWeight: 'bold',
    fontSize: stylesForMultipleDevice.fontSize + 5,
    marginTop: -2,
  },
  payBefore: {
    marginLeft: 15,
    color: color.orange,
    fontSize: stylesForMultipleDevice.fontSize - 2,
    fontStyle: 'italic',
    marginTop: 5,
  },
  containerButtonNextBack: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
  },
};
