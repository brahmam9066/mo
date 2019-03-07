import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Picker} from 'react-native';

export default class Offline extends Component{
    constructor(props) {
        super(props);
      }
  render() {
    return (
        <View style={{flex : 1}}>
            <View style={{flex : 2}}>
                <TextInput style={{backgroundColor : '#FFFFFF',margin:10}} placeholder='Search Cattle'></TextInput>
            </View>
            <View style={{flex:9,backgroundColor : '#FFFFFF'}}>
                <Text style={{fontSize:12,color : 'grey'}}>Home/Profile Details</Text>
                <Text style={{fontSize:12,fontWeight:'bold'}}>Search</Text>
                <Picker selectedValue='Cattle 1' mode='dropdown' style={{ height: 50, width: 500 }} onValueChange={(itemValue, itemIndex) => console.log(itemValue)}> 
                    <Picker.Item label="Cattle 1" value="Cattle 1" />
                    <Picker.Item label="Cattle 2" value="Cattle 2" />
                    <Picker.Item label="Cattle 3" value="Cattle 3" />
                </Picker>
            </View>
        </View>
    );
  }
}



