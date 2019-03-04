import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Calendar extends React.Component {

  render() {
  
    return (
      <View>
        <ScrollView >

            <View style={styles.header}>

            <Image source={require('../assets/images/bird.jpg')} style={styles.image}/>
            
            </View>

        </ScrollView>
    </View>
    );
  }
  }

  const styles = StyleSheet.create({
   
  
    
    header: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
 
  
    image: {
      flex: 1,
      width: 200,
      height: 200,
      resizeMode: 'contain' }
  });
