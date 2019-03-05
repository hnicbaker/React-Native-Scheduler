import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet, 
  Text
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import AddForm from './AddForm';
import Login from './Login';
import axios from 'axios';
import moment from 'moment';
import { Button } from 'native-base';



export default class Calendar extends React.Component {

  constructor(props) {
	  super(props);
	
	  this.state = {
      appointments: [], 
      buttonPressed: false 
    };
  

  }
  
  
  
  getAppointments = async (date) => {
    try {
      const response = await axios.post('http://0441a3d7.ngrok.io/appointments', { date: date, get: "true" })
      const appointments = response.data.appointments
      this.setState({appointments})

      console.log(response.data)
    } catch(e) {
      console.error(e)
    }
  }


  onPressButton = () => {
      this.setState({buttonPressed:true})
      console.log(this.state.buttonPressed)
    }
  
 

  deleteAppointments = async (id) => {

		axios.delete('http://17a0c694.ngrok.io/appointments/'+id)
		.then(function(response) {
			const data = response.data;
			alert(data.msg);
			// this.getAppointments();
		})
		.catch(function(err) {
			alert(err)
		})
	};

  
 showForm = () => {
  if (this.state.buttonPressed === true) {
    return(
    <AddForm />
    )
  }else 
  return(
    <Button rounded light style={styles.button} onPress={this.onPressButton}>
    <Text>Add Appointment</Text>
  </Button>
  )
 }
  
  

  render() {
    
    return (
      <View>
        


    <CalendarStrip
    onDateSelected={(date)=>{
      
      let selectedDate = (date.format('MMMM Do YYYY'))
      console.log(selectedDate)
      this.getAppointments(selectedDate)
    }}
      daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'grey'}}
      style={{height:140, paddingTop: 20, paddingBottom: 10}}
    />


    
 
  <Text h1 style={styles.appointments}>{this.state.appointments.map((el)=>{

    let time = el.time;
    
    return (moment(time).format('LT') ) + " - " + (el.name) + " - " + (el.description) + "\n"
    })}</Text>

  

          <ScrollView>
          
        {this.showForm()}
      
        </ScrollView>
    </View>
    );
  }
  }

  const styles = StyleSheet.create({

      button: {
          alignSelf: 'center',
          margin: 15, 
          padding: 15
      },

      appointments: {
        alignSelf: 'center'
      },
    
     
  });

