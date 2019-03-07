import React, {Component} from 'react';
import {StyleSheet,View,TextInput,Text,CheckBox,Button,Alert} from 'react-native';

export default class ImgComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { text: '' ,checked : false,buttonDisabled : true,agree : false};
      }
      onPressSignUp = () => {
        const navigator = this.props.navigation;
        navigator.navigate('otp');
    }
    changeMobNo = (mobNo) => {
        this.setState({text : mobNo});
    }
    changeCheckBox = (newVal) => {
        this.setState({checked :newVal});
        if(this.state.text || this.state.checked) 
            Alert.alert('Terms of Use','Lorel ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.', [{text: "Don't Agree", onPress: () =>{this.setState({checked : false});}, style: 'cancel'},{text: 'Agree', onPress: () => {this.setState({buttonDisabled : true,agree : true})}}])
        else 
            Alert.alert('','Please enter mobile number and check I agree',[{text: "Ok", onPress: () =>this.setState({checked : false})}])
    }
  render() {   
    const otpmsg = <Text>You'll receive an SMS to verify your phone number</Text>;
    const emptymsg = <Text></Text>;
    return (
      <View style={styles.conntainer}>
       <View style={{marginTop:10}}><Text style={styles.title}>Welcome Back!</Text></View>
        <Text style={styles.text}>Mobile Number</Text><TextInput id='mobNo' name='text' style={styles.input} value={this.state.text} onChangeText={(text)=> this.changeMobNo(text)} keyboardType="numeric"></TextInput>
        <View style={{flexDirection : 'row',marginTop:20,marginBottom:20}}>
            <CheckBox value={this.state.checked} onValueChange={(checkval)=>this.changeCheckBox(checkval)}/>
            <Text style={styles.text}>I agree to Stellapps Terms of Use and Privacy Policy</Text>
        </View>
        <Button color='#009887' onPress={this.onPressSignUp} title='Sign Up' disabled={(!this.state.text || !this.state.checked) || !this.state.agree}></Button>
        <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}><Text style={styles.text} onPress={()=>navigator.navigate('login')}>Already Member? Sign In</Text></View>
        <View style={{marginTop:20,marginBottom:20,justifyContent : 'center',alignItems : 'center'}}>{this.state.agree ? otpmsg : emptymsg }</View>
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