import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/Header';
import InformationsOfService from '../../../components/InformationsOfService';
import { dataInfoService } from '../../../fakeData';
import { stylesAppointmentBookingInformation } from '../../../styles/Screens/AppointmentBookingInformation';
import { color } from '../../../styles/color';
import { textGlobal } from '../../../textGlobal';
import CalendarCustom from '../../../components/Calendar';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

const AppointmentCalendar = ({ date }) => {
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
          <CalendarCustom bookingDate={`${moment().format('YYYY-MM-DD')}`} />
        </View>
        <View style={stylesAppointmentBookingInformation.containerTitleService}>
          <Text style={stylesAppointmentBookingInformation.titleService}>
            {textGlobal.INFORMATION_OF_SERVICE_APPOINTMENT}
          </Text>
        </View>
        <View style={stylesAppointmentBookingInformation.containerBody}>
          {dataInfoService &&
            dataInfoService?.map((item, index) => (
              <InformationsOfService
                key={index}
                uri={item?.icon}
                title={item?.title}
                content={item?.content}
                marginBottom={index === dataInfoService.length - 1 ? 0 : 15}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentCalendar;

const styles = StyleSheet.create({});
