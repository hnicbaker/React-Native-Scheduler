import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import axios from 'axios';

export default class Calendar extends React.Component {

  constructor(props) {
	  super(props);
	
	  this.state = {
      appointments: []
    };
    
	}
  
  getAppointments = async () => {
    try {
      const response = await axios.get('https://67eb8b16.ngrok.io/appointments')
      const appointments = response.data.appointments
      this.setState({appointments})

      console.log(response.data)
    } catch(e) {
      console.error(e)
    }
  }

  deleteAppointments = async (id) => {

		axios.delete('https://67eb8b16.ngrok.io/appointments/'+id)
		.then(function(response) {
			const data = response.data;
			alert(data.msg);
			this.getAppointments();
		})
		.catch(function(err) {
			alert(err)
		})
	};

  componentDidMount() {
   this.getAppointments()
  }

  render() {
  
    return (
      <View>
        <ScrollView >
         
        <View style={styles.container}>
    <CalendarStrip
      style={{height:150, paddingTop: 20, paddingBottom: 10}}
    />
  </View>

  {/* <Text>{this.state.appointments.map((el)=>{return(el.name) + "\n" })}</Text> */}

        </ScrollView>
</View>
    );
  }
  }

  const styles = StyleSheet.create({
    container: { flex: 1 }
  });