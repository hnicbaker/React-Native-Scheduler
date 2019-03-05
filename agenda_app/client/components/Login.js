import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Content, Form, Item, Input, Label, Button, Icon, Text} from 'native-base';


export default class Login extends Component {
	
	render() {
		return (
            <View>
           <Text style={ { fontFamily: 'AmericanTypewriter-Light', alignSelf: 'center', fontSize: 25 }}>Please Log In. {"\n"} </Text>
			<Content>
				<Form style={styles.formOuter}>
					<Item floatingLabel style={styles.formInput}>
						<Label style={styles.label}>Username</Label>
						<Input/>
					</Item>

                    <Item floatingLabel style={styles.formInput}>
						<Label style={styles.label}>Password</Label>
						<Input/>
					</Item>
                   	
				</Form>
                <Button rounded light style={styles.button}>
            <Text>Submit</Text>
          </Button>
			</Content>
            </View>
		)
	}
}

const styles = StyleSheet.create({
	formOuter: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center'
        
        
	},
	formInput: { 
        width:200,
        alignSelf: 'center'
    },
    
    label: {
        alignSelf: 'center'
    },

    button: {
        alignSelf: 'center',
        marginTop: 20
    }
	
});