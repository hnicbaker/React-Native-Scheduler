import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet, 
  Text
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import AddForm from './AddForm';
import axios from 'axios';
import moment from 'moment';



export default class Calendar extends React.Component {

  constructor(props) {
	  super(props);
	
	  this.state = {
      appointments: []
    };
  

  }
  
  
  
  getAppointments = async (date) => {
    try {
      const response = await axios.post('http://0efae641.ngrok.io/appointments', { date: date, get: "true" })
      const appointments = response.data.appointments
      this.setState({appointments})

      console.log(response.data)
    } catch(e) {
      console.error(e)
    }
    // let date = CalendarStrip.getSelectedDate
    // console.log(date)
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

  // componentDidMount() {
  //  this.getAppointments()
  // }

  
  

  render() {
  
    return (
      <View>
        <ScrollView >


    <CalendarStrip
    onDateSelected={(date)=>{
      
      let selectedDate = (date.format('MMMM Do YYYY'))
      console.log(selectedDate)
      this.getAppointments(selectedDate)
    }}
      daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'grey'}}
      style={{height:150, paddingTop: 20, paddingBottom: 10}}
    />



    {/* <AddForm /> */}
 
  <Text>{this.state.appointments.map((el)=>{return(el.name) + "\n" })}</Text>

        </ScrollView>
    </View>
    );
  }
  }

