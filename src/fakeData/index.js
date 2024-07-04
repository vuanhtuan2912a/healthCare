import moment from 'moment';
import { textGlobal } from '../textGlobal';

export const dataInfoService = [
  {
    title: textGlobal.HOSPITAL_NAME,
    content: '371 Đ. Điện Biên Phủ, P.4, Q.3, TP.HCM',
    icon: require('../assets/icons/location.png'),
  },
  {
    title: textGlobal.DATE_OF_APPOINTMENT,
    content: moment().format('dddd - DD/MM/YYYY'),
    icon: require('../assets/icons/calendar.png'),
  },
  {
    title: textGlobal.HOT_LINE,
    content: '1900 6765',
    icon: require('../assets/icons/phone.png'),
  },
];

export const dataOfPatient = [
  {
    content: 'Hồ Nguyên Vũ - 1123123123',
    icon: require('../assets/icons/person.png'),
  },
  {
    content: 'Ngày sinh: 18/06/1999',
    icon: require('../assets/icons/information.png'),
  },
  {
    content: '0909319182',
    icon: require('../assets/icons/phone.png'),
  },

  {
    content: '2 Lê Lợi, Phường 12, Quận 1, TP.HCM, ',
    icon: require('../assets/icons/location.png'),
  },
];

export const userInformationFake = {
  phone: `0909319182`,
  CCCD: `034200012211`,
  name: `Hồ Nguyên Vũ`,
  dob: `13/11/2000`,
  gender: 1, // 0 là nữ ,  1 là nam
  address: `2 Lê Lợi, Phường 12, Quận 1, TP.HCM`,
  dateOfCreate: `21/11/2021`,
};

export const dataSpecialist = [
  {
    content: 'Chuyên khoa: Nội khoa',
  },
  {
    content: 'Chuyên khoa: Ngoại khoa',
  },
  {
    content: 'Chuyên khoa: Nhi khoa',
  },
];
