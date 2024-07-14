import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCustomWithIcon from '../../../components/ButtonCustomWithIcon';
import ButtonWithSelectRadio from '../../../components/ButtonWithSelectRadio';
import DropDownButton from '../../../components/DropDownButton';
import DropDownDate from '../../../components/DropDownButton/DropDownDate';
import HeaderBooking from '../../../components/HeaderBooking';
import TypesAppointment from '../../../components/TypesAppointment';
import { dataInfoService, dataSpecialist } from '../../../fakeData';
import { stylesAppointmentBookingInformation } from '../../../styles/Screens/AppointmentBookingInformation';
import { color } from '../../../styles/color';
import { styles, stylesForMultipleDevice } from '../../../styles/global';
import { textGlobal } from '../../../textGlobal';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveDataAppointment,
  saveSpecialtyAppointment,
} from '../../../store/actions/appointment';

const AppointmentBooking = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dateAppointment = useSelector(state => state.appointment.date);
  const [selectedSpecialty, setSelectedSpecialty] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);
  const [selectedTypesAppointment, setSelectedTypesAppointment] = useState(
    textGlobal.CASH_FEE,
  );

  return (
    <View style={styles.container}>
      <HeaderBooking />
      <Text style={stylesAppointmentBookingInformation.title}>
        {textGlobal.PLEASE_SELECT_SPECIALTY}
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize,
            color: color.carbonGrey,
            fontWeight: 'bold',
            marginLeft: 15,
          }}>
          {textGlobal.EXAMINATION_TYPE}
        </Text>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize,
            color: color.topaz,
            fontWeight: 'bold',
          }}>
          {' *'}
        </Text>
      </View>
      <TypesAppointment
        typesAppointment={selectedTypesAppointment}
        onPressCashFee={() => setSelectedTypesAppointment(textGlobal.CASH_FEE)}
        onPressBHYT={() => setSelectedTypesAppointment(textGlobal.BHYT)}
      />
      <ScrollView>
        <View>
          <ButtonWithSelectRadio
            content={textGlobal.CHOOSE_DATE_APPOINTMENT}
            onPress={() => setSelectedDate(!selectedDate)}
            selected={selectedDate}
          />
          <DropDownDate
            onPress={() => setSelectedDate(!selectedDate)}
            onPressSelected={() => setSelectedDate(!selectedDate)}
            dropDownSelected={selectedDate}
            content={textGlobal.CHOOSE_DATE_APPOINTMENT}
          />
        </View>
        <View>
          <ButtonWithSelectRadio
            content={textGlobal.CHOOSE_SPECIALTY}
            onPress={() => setSelectedSpecialty(!selectedSpecialty)}
            selected={selectedSpecialty}
          />
          <DropDownButton
            onPress={() => setSelectedSpecialty(!selectedSpecialty)}
            onPressSelected={() => {
              setSelectedSpecialty(selectedSpecialty);
              dispatch(saveSpecialtyAppointment(dataSpecialist));
            }}
            dropDownSelected={selectedSpecialty}
            content={textGlobal.CHOOSE_SPECIALTY}
            data={dataSpecialist}
          />
        </View>
      </ScrollView>
      <View style={stylesAppointmentBookingInformation.containerButtonNextBack}>
        <ButtonCustomWithIcon
          content={textGlobal.BACK}
          backgroundColor={color.white}
          borderColor={color.topaz}
          borderWidth={1}
          textColor={color.topaz}
          tintColor={color.topaz}
          alignItems="center"
          onPress={() => navigation.goBack()}
          marginTop={stylesForMultipleDevice.marginTop}
          paddingHorizontal={15}
          iconLeft={require('../../../assets/icons/icon-left.png')}
          width={120}
        />
        <ButtonCustomWithIcon
          content={textGlobal.NEXT}
          backgroundColor={color.lightGrey}
          borderColor={color.topaz}
          textColor={color.white}
          tintColor={color.white}
          alignItems="center"
          onPress={() => {
            navigation.navigate('AppointmentBookingInformation');
            dispatch(
              saveDataAppointment({
                specialty: selectedSpecialty,
                date: selectedDate,
              }),
            );
          }}
          marginTop={stylesForMultipleDevice.marginTop}
          paddingHorizontal={15}
          iconRight={require('../../../assets/icons/icon-right.png')}
          width={120}
        />
      </View>
    </View>
  );
};

export default AppointmentBooking;
