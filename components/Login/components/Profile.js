import React, {Component} from 'react';
import {Text,View,Image} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

export default class Profile extends Component{
    constructor(props) {
        super(props);
      }
      static navigationOptions = ({navigation}) =>{
        return{
            headerTitle  : 'Profile Details'
        }
    }
  render() {
    onPressGo = () =>{
        console.log('hi');
    }
    return (
        <View style={{flex : 1}}>
            <View style={{flex : 2,backgroundColor:'#FFFFFF',marginBottom:20}}>
               <Text style={{fontSize:12,color : 'grey'}}>Home/Profile Details</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex : 2}}><Image source={require('../images/profilepic.jpg')}></Image></View>
                    <View style={{flex : 3}}><Text style={{fontSize:15,marginTop:40,fontWeight:'bold',paddingLeft:15}}> John Doe</Text></View>
                    <View style={{flex : 1}}><Text style={{fontSize:15,marginTop:40,fontSize:10,paddingLeft:15}}>Edit</Text></View>
                </View>
            </View>
            <View style={{flex:4,backgroundColor:'#FFFFFF',padding:20}}>
               <View style={{flexDirection:'row'}}>
                    <View style={{flex : 1}}><Icon name="envelope" size={17} color='#E5E5E5'/></View>
                    <View style={{flex : 5}}><Text style={{fontSize:15,paddingLeft:15}}> johndoe@stellapps.com</Text></View>
                    <View style={{flex : 1}}><Text style={{fontSize:15,fontSize:10,paddingLeft:15}}>Edit</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex : 1}}><Icon name="phone" size={17} color='#E5E5E5'/></View>
                    <View style={{flex : 5}}><Text style={{fontSize:15,fontSize:10,paddingLeft:15}}>+91 123456789</Text></View>
                    <View style={{flex : 1}}></View>
                </View>
                <View style={{flexDirection:'row',paddingTop:40}}>
                    <View style={{flex : 1}}><Icon name="circle" size={17} color='#E5E5E5'/></View>
                    <View style={{flex : 5}}><Text style={{fontSize:12,paddingLeft:15}}>Org Name : Kudlu Farm</Text></View>
                    <View style={{flex : 1}}></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex : 1}}><Icon name="circle" size={17} color='#E5E5E5'/></View>
                    <View style={{flex : 5}}><Text style={{fontSize:12,fontSize:10,paddingLeft:15}}>Reporting ORg : Stellapps Technologies Pvt. Ltd</Text></View>
                    <View style={{flex : 1}}></View>
                </View>
            </View>
        </View>
    );
  }
}


