import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCustomWithIcon from '../../../components/ButtonCustomWithIcon';
import ButtonWithSelectRadio from '../../../components/ButtonWithSelectRadio';
import DropDownButton from '../../../components/DropDownButton';
import DropDownDate from '../../../components/DropDownButton/DropDownDate';
import HeaderBooking from '../../../components/HeaderBooking';
import TypesAppointment from '../../../components/TypesAppointment';
import { color } from '../../../styles/color';
import { styles, stylesForMultipleDevice } from '../../../styles/global';
import { textGlobal } from '../../../textGlobal';
import { dataSpecialist } from '../../../fakeData';
import { stylesAppointmentBookingInformation } from '../../../styles/Screens/AppointmentBookingInformation';

const AppointmentBooking = () => {
  const navigation = useNavigation();
  const [selectedSpecialty, setSelectedSpecialty] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);

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
      <TypesAppointment />
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
            onPressSelected={() => setSelectedSpecialty(selectedSpecialty)}
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
          onPress={() => navigation.navigate('AppointmentBookingInformation')}
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
