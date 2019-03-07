import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';

export default class Otp extends Component{
    constructor(props) {
        super(props);
        this.state = { Password: '' };
      }
      onPressSubmit = ()=>{
        const navigator = this.props.navigation;
        navigator.navigate('login');
    }
  render() {
    return (
        <View style={styles.conntainer}>
        <Text style={styles.text}>Password</Text><TextInput style={styles.input} value={this.state.Password} onChangeText={(psw) => this.setState({Password : psw})} secureTextEntry={true}></TextInput>
        <View style={{marginTop:20,marginBottom:20}}><Button color='#009887' onPress={this.onPressSubmit} title='Submit' disabled={!this.state.Password}></Button></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    conntainer : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        padding : 20
      },
      input: {
          borderBottomColor: 'grey',
          borderBottomWidth: 1      
       },
       text : {
           fontSize : 15,
           color : 'grey'
       }
});

