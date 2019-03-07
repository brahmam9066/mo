import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Feather";

import BasicSectionList from './sectionlist/BesicSectionList';

export default class AISummary extends Component{
    static navigationOptions = {
        title: 'AI Summary',
      };
    render(){
        return(
            <View>
                 <View style={styles.SectionStyle}>
                    <TextInput 
                            underlineColorAndroid = "transparent"
                            placeholder = "Search AI"
                            placeholderTextColor = "gray"
                            autoCapitalize = "none"
                        />
                    <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                    <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                 </View>

                 <View style={styles.box1}>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>Home/Farm Admin/Breed/AI Summary</Text>
                            <Icon style={styles.searchIcon} name="more-vertical" size={30} color="#000"/>
                        </View>
         
                       <View style={{flex: 7, flexDirection: 'row',flexWrap:'wrap'}}>
                         <BasicSectionList />
                       </View>
                        
                </View>

                  <View style={styles.box2}>
                    <View style={{flex:1}}>
                       <Text style={styles.footer}>Copyright &copy; 2018 Stellapps</Text>
                    </View>
                 </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
         borderWidth: .5,
        borderColor: 'gray',
        height: 40,
        margin: 20,
        position:'relative'
      },
      searchIcon: {
        position:'absolute',
        right: 24 ,
        padding:5
   },
   box1:{
       backgroundColor:'white',
       height:'77%',
       marginTop:2
   },
   text:{
    marginLeft:20,
    marginTop:15,
    color:'#B7B9B9'
    },
    box2:{
        backgroundColor:'white',
        height:40,
       marginTop:20
    },
    footer:
    {
        textAlign:'center',
        color:'#B7B9B9'
    }
})


  