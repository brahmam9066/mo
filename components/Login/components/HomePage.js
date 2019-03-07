import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default class HomePage extends Component{
    constructor(props) {
        super(props);
      }
    //   static navigationOptions = ({navigation}) =>{
    //     return{
    //         headerLeft:(
    //             <TouchableOpacity><Icon name="bars" style={{color:'white',marginLeft:20}} size={20} onPress={() => navigation.navigate('DrawerOpen')}/></TouchableOpacity>
    //         )
    //     }
    // }
    render(){
        return(
            <View>
            <Text>Home Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});

