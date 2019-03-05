import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import AddForm from './AddForm';


export default class Login extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
        loggedIn: false, 
        UserName: ''
      };
    }
    
    onPressButton = () => {
        this.setState({loggedIn:true})
        console.log(this.state.loggedIn)
        console.log(this.state.UserName)
      }

	render() {

        if(this.state.loggedIn === false){
            return (
    
                <View>
               <Text style={ { fontFamily: 'AmericanTypewriter-Light', alignSelf: 'center', fontSize: 25 }}>Please Log In. {"\n"} </Text>
                <Content>
                    <Form style={styles.formOuter}>
                        <Item floatingLabel style={styles.formInput}>
                            <Label style={styles.label}>Username</Label>
                            <Input onChangeText={(UserName) => this.setState({UserName})}
                            value={this.state.name} />
                        </Item>
    
                        <Item floatingLabel style={styles.formInput}>
                            <Label style={styles.label}>Password</Label>
                            <Input/>
                        </Item>
                           
                    </Form>
                    <Button rounded light style={styles.button} onPress={this.onPressButton}>
                <Text>Submit</Text>
              </Button>
                </Content>
                </View>
            )
        } else {
            return (
            <View>
                <Text style={ { fontFamily: 'AmericanTypewriter-Light', alignSelf: 'center', fontSize: 25 }}> Welcome {this.state.UserName}! </Text>
                <AddForm /> 
            </View>
            )
        }
	
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