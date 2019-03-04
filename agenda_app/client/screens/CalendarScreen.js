import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header'
import Calendar from '../components/Calendar'

export default class CalendarScreen extends React.Component {
 

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Calendar />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
