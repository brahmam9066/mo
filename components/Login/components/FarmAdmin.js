import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput} from 'react-native';

export default class FarmAdmin extends Component{
    constructor(props) {
        super(props);
      }
  render() {
    onPressGo = () =>{
        console.log('hi');
    }
    return (
        <View style={{flex : 1}}>
            <View style={{flex : 2}}>
                <TextInput style={{backgroundColor : '#FFFFFF',margin:10}} placeholder='Search Cattle'></TextInput>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text}>Home/Farm Admin</Text>
                <TouchableOpacity onPress={onPressGo} style={styles.view2Container}><Image source = {require('../images/farmImage1.jpg')}/><Text style={styles.view2Text5}>My Account</Text><Text style={styles.symbol}>></Text></TouchableOpacity>
                <TouchableOpacity onPress={onPressGo} style={styles.view2Container}><Image source = {require('../images/farmImage2.jpg')}/><Text style={styles.view2Text5}>Animal Settings</Text><Text style={styles.symbol}>></Text></TouchableOpacity>
                <TouchableOpacity onPress={onPressGo} style={styles.view2Container}><Image source = {require('../images/farmImage3.jpg')}/><Text style={styles.view2Text2}>Health</Text><Text style={styles.symbol}>></Text></TouchableOpacity>
                <TouchableOpacity onPress={onPressGo} style={styles.view2Container}><Image source = {require('../images/farmImage4.jpg')}/><Text style={styles.view2Text8}>Breed</Text><Text style={styles.symbol}>></Text></TouchableOpacity>
                <TouchableOpacity onPress={onPressGo} style={styles.view2Container}><Image source = {require('../images/farmImage5.jpg')}/><Text style={styles.view2Text8}>Stock Management</Text><Text style={styles.symbol}>></Text></TouchableOpacity>
                <TouchableOpacity onPress={onPressGo} style={styles.view2Container}><Image source = {require('../images/farmImage6.jpg')}/><Text style={styles.view2Text2}>Treatment Cost Settings</Text><Text style={styles.symbol}>></Text></TouchableOpacity>
            </View>
            <View style={styles.view3}>
            <TouchableOpacity style={{flex:2,paddingLeft:20}}><Image source = {require('../images/farmImage7.jpg')}/></TouchableOpacity>
            <TouchableOpacity style={{flex:2}}><Image source = {require('../images/farmImage8.jpg')}/></TouchableOpacity>
            <TouchableOpacity style={{flex:2}}><Image source = {require('../images/farmImage9.jpg')}/></TouchableOpacity>
            <TouchableOpacity style={{flex:2}}><Image source = {require('../images/farmImage10.jpg')}/></TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    text : {
        fontSize : 12,
        color : 'grey'
    },
    view2:{
        flex : 6,
        backgroundColor : '#FFFFFF',
        marginBottom:20,
        padding:10
    },
    view3:{
        flex : 1,
        backgroundColor : '#FFFFFF',
        flexDirection:'row'
    },
    view2Container:{
        flexDirection: 'row',
        margin : 12,
        borderBottomColor:'#EFEFEF',
        borderBottomWidth: 1
    },
    view2Text5 :{
        fontWeight:'bold',
        paddingTop : 5,
        marginLeft:5
    },
    view2Text8 :{
        fontWeight:'bold',
        paddingTop : 5,
        marginLeft:8
    },
    view2Text2 :{
        fontWeight:'bold',
        paddingTop : 5,
        marginLeft:2
    },
    symbol:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft: 'auto'
    }
});

