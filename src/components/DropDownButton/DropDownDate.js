import moment from 'moment';
import 'moment/locale/vi';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
  dayNames,
  dayNamesShort,
  monthNames,
} from '../../configs/configCalendar';
import { stylesDropDownDate } from '../../styles/DropDown';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const DropDownDate = ({
  uriIcon = require('../../assets/icons/arrow-right.png'),
  content = '',
  dropDownSelected = true,
  onPress = () => {},
  iconLeft = require('../../assets/icons/calendar_select.png'),
}) => {
  const [selected, setSelected] = useState('');
  const [selectedContent, setSelectedContent] = useState(
    moment().locale('vi').format('LL'),
  );

  LocaleConfig.locales['vi'] = {
    monthNames: monthNames,
    monthNames: monthNames,
    monthNamesShort: monthNames,
    dayNames: dayNames,
    dayNamesShort: dayNamesShort,
    today: 'Hôm nay',
  };

  LocaleConfig.defaultLocale = 'vi';

  return (
    <View style={[stylesDropDownDate.container, { paddingVertical: 3 }]}>
      <Pressable
        style={stylesDropDownDate.buttonShowCalendar}
        onPress={onPress}>
        <View style={stylesDropDownDate.containerIcon}>
          <Image
            source={iconLeft}
            style={stylesDropDownDate.icon}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: stylesForMultipleDevice.fontSize,
              color: color.carbonGrey,
              lineHeight: stylesForMultipleDevice.heightButton,
            }}>
            {selectedContent ? selectedContent : content}
          </Text>
        </View>
        <Image
          source={uriIcon}
          style={{
            width: 15,
            height: 15,
            transform: [{ rotate: dropDownSelected ? '-90deg' : '90deg' }],
          }}
          tintColor={color.carbonGrey}
          resizeMode="contain"
        />
      </Pressable>
      {dropDownSelected && (
        <View style={stylesDropDownDate.containerCalendar}>
          <Calendar
            style={{
              borderRadius: 6,
            }}
            markingType={'custom'}
            onDayPress={day => {
              setSelected(day.dateString);
              setSelectedContent(
                moment(day.dateString).locale('vi').format('LL'),
              );
              onPress();
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
                selectedColor: color.topaz,
                customStyles: {
                  container: {
                    borderRadius: 2.5,
                  },
                },
              },
            }}
            theme={{
              backgroundColor: color.topaz,
              calendarBackground: color.white,
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: color.topaz,
              selectedDayTextColor: color.white,
              todayTextColor: '#b6c1cd',
              'stylesheet.calendar.header': {
                dayTextAtIndex0: {
                  color: color.red,
                },
                dayTextAtIndex6: {
                  color: color.topaz,
                },
              },
            }}
            minDate={moment().add(1, 'days').format('YYYY-MM-DD')}
            hideExtraDays={true}
          />
        </View>
      )}
    </View>
  );
};

export default DropDownDate;
