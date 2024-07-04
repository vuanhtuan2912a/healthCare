import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
import {
  dayNames,
  dayNamesShort,
  monthNames,
} from '../../configs/configCalendar';
import { color } from '../../styles/color';

const CalendarCustom = ({
  bookingDate = `${moment().format('YYYY-MM-DD')}`,
}) => {
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
    <View>
      <ScrollView>
        <Calendar
          style={{
            backgroundColor: color.white,
            shadowColor: color.carbonGrey,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 3,
            borderRadius: 6,
            margin: 5,
          }}
          markingType={'custom'}
          markedDates={{
            [bookingDate]: {
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
            todayTextColor: color.topaz,
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: color.red,
              },
              dayTextAtIndex6: {
                color: color.topaz,
              },
            },
          }}
          hideExtraDays={true}
        />
      </ScrollView>
    </View>
  );
};

export default CalendarCustom;
