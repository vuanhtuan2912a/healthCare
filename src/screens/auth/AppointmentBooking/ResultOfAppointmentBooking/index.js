import React from 'react';
import { Image, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import InformationsOfPatient from '../../../../components/InformationsOfPatient';
import InformationsOfService from '../../../../components/InformationsOfService';
import { dataInfoService, dataOfPatient } from '../../../../fakeData';
import { devideMoneyDot } from '../../../../functions/money';
import { stylesAppointmentBookingInformation } from '../../../../styles/Screens/AppointmentBookingInformation';
import { color } from '../../../../styles/color';
import { stylesForMultipleDevice } from '../../../../styles/global';
import { textGlobal } from '../../../../textGlobal';
import moment from 'moment';
import { useSelector } from 'react-redux';

const ResultOfAppointmentBooking = ({
  visible = true,
  id_appointment = 123123,
  dayTime = moment().format('DD/MM/YYYY'),
  onClose = () => {},
  money = 1000000,
  onPayment = () => {},
}) => {
  const dateAppointment = useSelector(state => state.appointment.date);
  const specialtyAppointment = useSelector(
    state => state.appointment.specialty,
  );

  const dataServiceAppointment = [
    dataInfoService[0],
    {
      title: textGlobal.DATE_OF_APPOINTMENT,
      content: moment(dateAppointment).format('dddd - DD/MM/YYYY'),

      icon: require('../../../../assets/icons/calendar.png'),
    },
    {
      title: textGlobal.SPECIALTY,
      content: specialtyAppointment,
      icon: require('../../../../assets/icons/specialist.png'),
    },

    dataInfoService[1],
  ];
  return (
    <Modal
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: color.transparent,
      }}
      visible={visible}
      onRequestClose={onClose}
      animationType="fade">
      <View
        style={{
          backgroundColor: color.black,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            backgroundColor: color.white,
            marginTop: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 70,
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              flexDirection: 'row',
              borderBottomWidth: 0.5,
              borderColor: color.lightGrey,
              alignItems: 'center',
              paddingVertical: 15,
            }}>
            <Text
              style={{
                fontSize: stylesForMultipleDevice.fontSize + 4,
                fontWeight: '600',
                color: color.carbonGrey,
              }}>
              {textGlobal.APPOINTMENT_SUCCESSFULL}
            </Text>
            <Pressable style={{ padding: 1 }} onPress={onClose}>
              <Image
                style={{ width: 13, height: 13 }}
                source={require('../../../../assets/icons/close.png')}
                resizeMode="contain"
                tintColor={color.carbonGrey}
              />
            </Pressable>
          </View>
          <ScrollView
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: color.white,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}>
            {/* -------------------------Header------------------------ */}

            {/* -------------------------Body------------------------ */}
            <View
              style={{
                borderWidth: 3,
                borderStyle: 'dotted',
                padding: 15,
                marginTop: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                maxWidth: 300,
                alignSelf: 'center',
                borderColor: color.topaz,
                paddingHorizontal: 25,
              }}>
              <Text
                style={{
                  fontSize: stylesForMultipleDevice.fontSize + 3,
                  fontWeight: '600',
                  color: color.topaz,
                }}>
                {`Mã lịch khám: ` + id_appointment}
              </Text>
            </View>
            {/* -------------------------Pay before------------------------ */}

            <Text
              style={{
                fontSize: stylesForMultipleDevice.fontSize,
                fontStyle: 'italic',
                color: color.orange,
                marginTop: 15,
                textAlign: 'center',
              }}>
              Thanh toán trước: {moment(dateAppointment).format('DD/MM/YYYY')}
            </Text>

            {/* -------------------------Informations------------------------ */}

            <View
              style={{
                marginBottom: 60,
                width: '100%',
                height: '100%',
              }}>
              <View
                style={[
                  stylesAppointmentBookingInformation.containerTitleService,
                  {
                    borderBottomWidth: 1,
                    borderWidth: 0,
                  },
                ]}>
                <Text style={stylesAppointmentBookingInformation.titleService}>
                  {textGlobal.INFORMATION_OF_SERVICE_APPOINTMENT}
                </Text>
              </View>

              <View
                style={[
                  stylesAppointmentBookingInformation.containerBody,
                  { borderWidth: 0 },
                ]}>
                {dataServiceAppointment &&
                  dataServiceAppointment?.map((item, index) => (
                    <InformationsOfService
                      key={index}
                      uri={item?.icon}
                      title={item?.title}
                      content={item?.content}
                      marginBottom={
                        index === dataServiceAppointment.length - 1 ? 0 : 15
                      }
                    />
                  ))}
              </View>
              <View
                style={[
                  stylesAppointmentBookingInformation.containerTitleService,
                  { borderWidth: 0, borderBottomWidth: 1 },
                ]}>
                <Text style={stylesAppointmentBookingInformation.titleService}>
                  {textGlobal.INFORMATION_OF_PATIENT}
                </Text>
              </View>
              <View
                style={[
                  stylesAppointmentBookingInformation.containerBody,
                  { borderWidth: 0 },
                ]}>
                {dataOfPatient &&
                  dataOfPatient?.map((item, index) => (
                    <InformationsOfPatient
                      key={index}
                      icon={item?.icon}
                      title={item?.title}
                      content={item?.content}
                      marginBottom={index === dataOfPatient.length ? 0 : 15}
                    />
                  ))}
              </View>

              <View style={stylesAppointmentBookingInformation.containerTotal}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={stylesAppointmentBookingInformation.totalText}>
                    {textGlobal.TOTAL}
                  </Text>
                  <Text style={stylesAppointmentBookingInformation.totalMoney}>
                    {devideMoneyDot(money)} VNĐ
                  </Text>
                </View>
                <Text style={stylesAppointmentBookingInformation.payBefore}>
                  {textGlobal.PAY_BEFORE}
                  {' ngày: '}
                  {moment(dateAppointment).format('DD/MM/YYYY')}
                </Text>
              </View>
              <Pressable
                style={{
                  marginHorizontal: 15,
                  paddingVertical: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: color.topaz,
                  borderRadius: 6,
                  marginTop: 15,
                }}
                onPress={onPayment}>
                <Text
                  style={{
                    color: color.white,
                    fontSize: stylesForMultipleDevice.fontSize,
                    fontWeight: '600',
                  }}>
                  Thanh toán ngay
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ResultOfAppointmentBooking;
