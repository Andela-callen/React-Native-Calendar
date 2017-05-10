import React, {Component} from 'react';

import {View,
        StyleSheet,
        Text} from 'react-native';

import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CalendarBody extends Component{
  render() {
    return(
      <View>
        <View style={styles.calendar_header}>
          <View style={styles.calendar_header_item}>
            <Button
              noDefaultStyles={true}
              onPress={this.press.bind(this)}>
              <Icon name="chevron-left" size={18} color="#333" />
            </Button>
            <Text style={styles.calendar_header_text}>{this.year()}</Text>
            <Button
              onDefaultStyles={true}
              onPress={this.press.bind(this)}>
              <Icon name="chevron-right" size={18} color="#333"/>
            </Button>
          </View>

          <View style={styles.calendar_header_item}>
            <Button noDefaultStyles={true}
              onPress={this.press.bind(this)}>
              <Icon name ='chevron-left' size={18} color='#333'/>
            </Button>
            <Text style={styles.calendar_header_text}>{this.month()}</Text>
            <Button
              onDefaultStyles={true}
              onPress={this.pressRight.bind(this)}>
              <Icon name="chevron-right" size={18} color="#333" />
            </Button>
          </View>
        </View>

        <View style={styles.calendar_weekdays}>
          { this.weekDays() }
        </View>
        
        
        <View style={styles.calendar_days}>

        </View>
        
      </View>
    )
  }

  year(){
    let date = new Date();
    return(date.getFullYear());
  }

  month(){
    let date = new Date();
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return(monthNames[date.getMonth()])
  }
  weekDays(){
    let weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return weekdays.map((day) => {
      return (
        <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
      );
    });
  } 

  pressRight(month){
    // month = this.month()
    // var nextMonth = month+1
    // return (nextMonth);
  }

  press(){

  }

  // renderWeeks() {
  //   let past_month_days = range(27, 31);
  //   let this_month_days = 
  // }
}

const styles = StyleSheet.create({
  calendar_header:{
    flexDirection:'row'
  },

  calendar_header_text:{
    fontWeight: 'bold',
    fontSize: 20
  },

  calendar_header_item:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight:40,
    paddingLeft: 40
  },

   calendar_weekdays: {
     alignItems: 'center',
     flexDirection: 'row'
  },

  calendar_days: {

  },

  calendar_weekdays_text: {
    flex: 1,
    color: '#C0C0C0',
    textAlign: 'center',
  }
})