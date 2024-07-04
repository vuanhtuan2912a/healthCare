import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ButtonCustomWithIcon from '../../../../components/ButtonCustomWithIcon';
import HeaderBooking from '../../../../components/HeaderBooking';
import InformationsOfService from '../../../../components/InformationsOfService';
import { color } from '../../../../styles/color';
import { styles, stylesForMultipleDevice } from '../../../../styles/global';
import { textGlobal } from '../../../../textGlobal';
import InformationsOfPatient from '../../../../components/InformationsOfPatient';
import { devideMoneyDot } from '../../../../functions/money';
import { dataInfoService, dataOfPatient } from '../../../../fakeData';
import { stylesAppointmentBookingInformation } from '../../../../styles/Screens/AppointmentBookingInformation';
import ResultOfAppointmentBooking from '../ResultOfAppointmentBooking';
import { useSelector } from 'react-redux';

const AppointmentBookingInformation = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = React.useState(false);
  const userInformations = useSelector(state => state.signInReducer);
  const user_data = [userInformations?.data];
  return (
    <View style={styles.container}>
      <HeaderBooking />
      <ScrollView
        style={{
          marginBottom: 60,
        }}>
        <Text style={stylesAppointmentBookingInformation.title}>
          {textGlobal.PLEASE_CONFIRM_YOUR_INFORMATION_APPOINTMENT}
        </Text>

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
        <View style={stylesAppointmentBookingInformation.containerTitleService}>
          <Text style={stylesAppointmentBookingInformation.titleService}>
            {textGlobal.INFORMATION_OF_PATIENT}
          </Text>
        </View>
        <View style={stylesAppointmentBookingInformation.containerBody}>
          {user_data &&
            user_data?.map((item, index) => (
              <View key={index}>
                <InformationsOfPatient
                  icon={require('../../../../assets/icons/person.png')}
                  content={item?.name}
                  marginBottom={15}
                />
                <InformationsOfPatient
                  icon={require('../../../../assets/icons/information.png')}
                  content={'CCCD: ' + item?.CCCD}
                  marginBottom={15}
                />
                <InformationsOfPatient
                  icon={require('../../../../assets/icons/phone.png')}
                  content={'SĐT: ' + item?.phone}
                  marginBottom={15}
                />
                <InformationsOfPatient
                  icon={require('../../../../assets/icons/location.png')}
                  content={item?.address}
                  marginBottom={15}
                />
                <InformationsOfPatient
                  icon={require('../../../../assets/icons/calendar.png')}
                  content={'Ngày sinh: ' + item?.dob}
                  marginBottom={15}
                />
              </View>
            ))}
        </View>

        <View style={stylesAppointmentBookingInformation.containerTotal}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={stylesAppointmentBookingInformation.totalText}>
              {textGlobal.TOTAL}
            </Text>
            <Text style={stylesAppointmentBookingInformation.totalMoney}>
              {devideMoneyDot(1000000)} VNĐ
            </Text>
          </View>
          <Text style={stylesAppointmentBookingInformation.payBefore}>
            {textGlobal.PAY_BEFORE}: 17:00 (16 tháng 4, 2023)
          </Text>
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
          iconLeft={require('../../../../assets/icons/icon-left.png')}
          width={120}
        />
        <ButtonCustomWithIcon
          content={textGlobal.NEXT}
          backgroundColor={color.lightGrey}
          borderColor={color.topaz}
          textColor={color.white}
          tintColor={color.white}
          alignItems="center"
          onPress={() => setIsVisible(true)}
          marginTop={stylesForMultipleDevice.marginTop}
          paddingHorizontal={15}
          iconRight={require('../../../../assets/icons/icon-right.png')}
          width={120}
        />
      </View>
      <ResultOfAppointmentBooking
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        onPayment={() => setIsVisible(false)}
      />
    </View>
  );
};

export default AppointmentBookingInformation;
