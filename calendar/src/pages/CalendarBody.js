import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  calendar_header: {
    flexDirection: 'row'
  },

  calendar_header_text: {
    fontWeight: 'bold',
    fontSize: 20
  },

  calendar_header_item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 40,
    paddingLeft: 40
  },
  calendar_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column'

  },
  calendar_weekdays: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  calendar_days_rows: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },

  calendar_days: {
    flex: 1,
    width: '100%',
    // flexDirection: 'row'
  },

  calendar_days_text: {
    flex: 1,
    color: '#C0C0C0',
    width: '100%'
  },

  calendar_weekdays_text: {
    flex: 1,
    width: '14.29%',
    color: '#C0C0C0',
    textAlign: 'center',
  },

  calendar_per_week: {
    width: '14.29%'
  },

  week_days: {
    flexDirection: 'row'
  },

  day: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 17,
    margin: 2
  },
  day_text: {
    textAlign: 'center',
    color: '#A9A9A9',
    fontSize: 25
  }
});


/**
 * CalendarBody class
 */
export default class CalendarBody extends Component {
  /**
   * CalendarBody constructor
   * @param {year} jsx details
   */
  constructor() {
    super();
    this.state = { year: '', month: '', weekDays: '', pressRight: '', press: '', getDaysInMonth: '' };
  }
  /**
   * CalendarBody method
   * @returns {jsx} HTML format
   */
  render() {
    return (
      <View>
        <View style={styles.calendar_header}>
          <View style={styles.calendar_header_item}>
            <Button
              noDefaultStyles
              onPress={this.press.bind(this)}
            >
              <Icon name="chevron-left" size={18} color="#333" />
            </Button>
            <Text style={styles.calendar_header_text}>{this.year()}</Text>
            <Button
              onDefaultStyles
              onPress={this.press.bind(this)}
            >
              <Icon name="chevron-right" size={18} color="#333" />
            </Button>
          </View>

          <View style={styles.calendar_header_item}>
            <Button
              noDefaultStyles
              onPress={this.press.bind(this)}
            >
              <Icon name="chevron-left" size={18} color="#333" />
            </Button>
            <Text style={styles.calendar_header_text}>{this.month()}</Text>
            <Button
              onDefaultStyles
              onPress={this.pressRight.bind(this)}
            >
              <Icon name="chevron-right" size={18} color="#333" />
            </Button>
          </View>
        </View>
        <View style={styles.calendar_container}>
          <View style={styles.calendar_weekdays}>
            {this.weekDays()}
          </View>

          <View style={styles.calendar_days}>
            {this.getDaysInMonth(this.month(), this.year())}
          </View>
        </View>
      </View>
    );
  }

  /*
   * Calendar year
   */
  year() {
    const date = new Date();
    return (date.getFullYear());
  }

  month() {
    const date = new Date();
    // const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    //   'July', 'August', 'September', 'October', 'November', 'December'];
    return (date.getMonth());
  }
  weekDays() {
    const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return weekdays.map(day => (
      <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
    ));
  }

  pressRight(month) {
    // month = this.month()
    // var nextMonth = month+1
    // return (nextMonth);
  }

  press() {

  }

  getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    const date = new Date(year, month, 1);
    const days = [];
    // var day = date.getDay()
    // countDay=1
    const lastDayPosition = new Date(year, month, 1).getDay()
    const lastDay = new Date(year, month, 0).getDate()
    let checkFirstTimeInTheWileLoop = 0;
    while (date.getMonth() === month) {
      let i = 0;
      let counterForAddingPreviousMonthsDay = 0;
      const arr = [];
      if (checkFirstTimeInTheWileLoop === 0) {
        while (counterForAddingPreviousMonthsDay < lastDayPosition) {
          arr.push(lastDay - counterForAddingPreviousMonthsDay)
          counterForAddingPreviousMonthsDay++;
        }

        arr.sort((a, b) => {
          return a - b;
        });
      }
      while (i < 7 - counterForAddingPreviousMonthsDay && date.getMonth() === month) {
        arr.push(date.getDate())
        date.setDate(date.getDate() + 1);
        i++;
      }

      days.push(arr);
      checkFirstTimeInTheWileLoop++;
    }
    return days.map((dayx) => {
      //  create a div for one row

      const a = dayx.map((day) => {
        return (
          <View style={styles.calendar_per_week} >
            <Button key={day} style={styles.calendar_days_text}>{day}</Button>
          </View>);
      });
      return <View style={styles.calendar_days_rows}>{a}</View>;
    });
  }

  getWeeksArray(days) {
    const weeks = [];
    let sevenDays = [];
    let count = 0;
    days.forEach((day) => {
      count += 1;
      sevenDays.push(day);
      if (count === 7) {
        weeks.push(sevenDays);
        count = 0;
        sevenDays = [];
      }
    });
    return weeks;
  }
}
