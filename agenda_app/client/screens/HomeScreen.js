import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import Login from '../components/Login';


export default class HomeScreen extends React.Component {
  

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        
        <Login />
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
