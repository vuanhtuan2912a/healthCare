import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/Header';
import InformationsOfService from '../../../components/InformationsOfService';
import { dataInfoService } from '../../../fakeData';
import { stylesAppointmentBookingInformation } from '../../../styles/Screens/AppointmentBookingInformation';
import { color } from '../../../styles/color';
import { textGlobal } from '../../../textGlobal';
import CalendarCustom from '../../../components/Calendar';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import moment from 'moment';

const AppointmentCalendar = () => {
  const bookingDate = useSelector(state => state.appointment.date);
  const specialty = useSelector(state => state.appointment.specialty);
  const data = [
    dataInfoService[0],
    {
      title: textGlobal.DATE_OF_APPOINTMENT,
      content: bookingDate
        ? moment(bookingDate).format('dddd - DD/MM/YYYY')
        : 'Bạn chưa đặt lịch hẹn khám. Vui lòng vào \nđặt lịch khám',
      icon: require('../../../assets/icons/calendar.png'),
    },
    {
      title: textGlobal.SPECIALTY,
      content: specialty
        ? specialty
        : 'Bạn chưa đặt lịch hẹn khám. Vui lòng vào \nđặt lịch khám',
      icon: require('../../../assets/icons/calendar.png'),
    },
    dataInfoService[1],
  ];
  return (
    <View>
      <Header content="Lịch khám bệnh" />
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color.white,
          paddingTop: 10,
        }}>
        <View style={{ paddingHorizontal: 10 }}>
          <CalendarCustom bookingDate={bookingDate} />
        </View>
        <View style={stylesAppointmentBookingInformation.containerTitleService}>
          <Text style={stylesAppointmentBookingInformation.titleService}>
            {textGlobal.INFORMATION_OF_SERVICE_APPOINTMENT}
          </Text>
        </View>
        <View style={stylesAppointmentBookingInformation.containerBody}>
          {data &&
            data?.map((item, index) => (
              <InformationsOfService
                key={index}
                uri={item?.icon}
                title={item?.title}
                content={item?.content}
                marginBottom={index === data.length - 1 ? 0 : 15}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentCalendar;
