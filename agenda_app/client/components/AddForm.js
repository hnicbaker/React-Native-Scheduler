import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import axios from 'axios';

export default class AddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			time: '',
            date: '', 
            description:'', 
            calendar:'',
           
        }
    }

	formSubmit = (e) => {
	    axios.post('http://0441a3d7.ngrok.io/appointments', this.state)
		.then(function(response) {
			const data = response.data;
			console.log(data)
		})
	}

	render() {
		return (
            <View>
			<Content>
				<Form style={styles.formOuter} >
					<Item floatingLabel style={styles.formInput}>
						<Label>Name</Label>
						<Input
						onChangeText={(name) => this.setState({name})}
						value={this.state.name}
						/>
					</Item>
                    <Item floatingLabel style={styles.formInput}>
						<Label>Time</Label>
						<Input
						onChangeText={(time) => this.setState({time})}
						value={this.state.time}
						/>
					</Item>

                    <Item floatingLabel style={styles.formInput}>
						<Label>Date</Label>
						<Input
						onChangeText={(date) => this.setState({date})}
						value={this.state.date}
						/>
					</Item>
                    <Item floatingLabel style={styles.formInput}>
						<Label>Desc</Label>
						<Input
						onChangeText={(description) => this.setState({description})}
						value={this.state.description}
						/>
					</Item>
                 
			
					<Button rounded light style={styles.submitBtn} onPress={this.formSubmit} >
						<Text>Submit</Text>
					</Button>
				</Form>
			</Content>
            </View>
		)
	}
}

const styles = StyleSheet.create({
	formOuter: {
		flex: 1,
	},
	formInput: {
		marginLeft: 0
	},
	submitBtn: {
		marginTop: 20, 
		alignSelf: 'center'
	}
});
