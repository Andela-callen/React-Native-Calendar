import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
// import {range} from 'lodash';
import Button from 'react-native-button';

import CalendarBody from '../pages/CalendarBody';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    backgroundColor: '#329BCB',
    flexDirection: 'row',
    padding: 20
  },

  header_item: {
    flex: 1
  },

  header_button: {
    flexDirection: 'row'
  },

  text_center: {
    textAlign: 'center'
  },

  text_right: {
    textAlign: 'right'
  },

  header_text: {
    color: '#fff',
    fontSize: 20
  },

  bold_text: {
    fontWeight: 'bold'
  }
});
/**
 * @class Calendar class for rendering calendar container
 * @param {render} jsx details
 */
export default class Calendar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Button
            noDefaultStyles
            onPress={this.press.bind(this)}
            styles={{ button: styles.header_item }}
          >
            <View style={styles.header_button}>
              <Icon name="chevron-left" size={30} color="#FFF" />
              <Text style={[styles.header_text]}>Menu</Text>
            </View>
          </Button>

          <View style={styles.header_item}>
            <Text style={[styles.header_text, styles.text_center, styles.bold_text]}>Calendar</Text>
          </View>

          <View style={styles.header_item}>
            <Text style={[styles.header_text, styles.text_right]}>Today</Text>
          </View>
        </View>
        <CalendarBody />

      </ScrollView>
    );
  }
  press() {
    console.log('Attempting to click on Menu');
  }
}
