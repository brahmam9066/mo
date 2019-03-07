import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Picker} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default class LangPref extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
              {
                label: 'English',
                value : 'English',
                size: 20
              },
              {
                label: 'Hindi',
                value: "Hindi",
                size: 20
              },
              {
                label: 'Kannada',
                value: 'Kannada',
                size: 20
              },
              {
                label: 'Malayalam',
                value : 'Malayalam',
                size: 20
              },
              {
                label: 'Tamil',
                value: 'Tamil',
                size: 20
              },
              {
                label: 'Telugu',
                value: 'Telugu',
                size: 20
              }
            ],
          };
      }
      onPress = data => this.setState({ data });
  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
        <View style={{flex : 1}}>
             <View><Text style={{fontSize:12,color : 'grey'}}>Home/Language Preference</Text></View>
             <View style={{alignItems:'flex-start',padding:20}}><RadioGroup radioButtons={this.state.data} onPress={this.onPress}/></View>
        </View>
    );
  }
}



