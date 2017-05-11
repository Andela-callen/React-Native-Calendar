import React, { Component } from 'react';

import { View,
        StyleSheet,
        Text } from 'react-native';

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

  calendar_weekdays: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  calendar_days: {
    flex: 1
    // flexDirection: 'row-reverse'
  },

  calendar_days_text: {
    flex: 1,
    color: '#C0C0C0',
  },

  calendar_weekdays_text: {
    flex: 1,
    color: '#C0C0C0',
    textAlign: 'center',
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

        <View style={styles.calendar_weekdays}>
          { this.weekDays() }
        </View>

        <View style={styles.calendar_days}>
          { this.getDaysInMonth(this.month(), this.year()) }
        </View>

      </View>
    );
  }

  year() {
    const date = new Date();
    return (date.getFullYear());
  }

  month() {
    const date = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
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
    let countDay = 1;
    while (date.getMonth() === month) {
      days.push(countDay);
      date.setDate(date.getDate() + 1);
      countDay++;
    }
    // console.log(days);
    return days.map(day => (
      <Text key={day} style={styles.calendar_days_text}>{day}</Text>
      ));
  }
}
