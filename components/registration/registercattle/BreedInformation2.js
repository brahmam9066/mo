/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, Picker, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome, { Icons } from 'react-native-fontawesome';
// import  {Ionicons, FontAwesome} from '@expo/vector-icons'

import { Dropdown } from 'react-native-material-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker'

export default class BreedInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentbreedingstate: '',
      heatsequence : '',
      pregnancydays : '',
     
    }  
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subcontainer}>

        <View style={styles.marginall}>
             <Text style={styles.profiledashboard}>{"\n"} Home / mooON Dashboard / Register cattle {"\n"}</Text>
             <Text style={styles.breedinfo}>Breed Information {"\n"}</Text>
         </View>

          <View style={styles.marginall}>
          <Text style={styles.currentbreedingstateext}>Current Breeding State</Text>
          <Picker style={styles.currentbreedingstatepicker}
                    mode="dropdown"
                     selectedValue={this.state.currentbreedingstate}
                onValueChange={(currbreedstate) => this.setState({currentbreedingstate: currbreedstate})}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Pregnant" value="pregnant" />
                    <Picker.Item label="Nonpregnant" value="nonpregnant" />
            </Picker>
            <View style={styles.currentbreedingstate}></View>
          </View>

          <View style={[styles.marginall, styles.currntkidirection]}>
              <Text style={styles.pregnancydetails}>Current Pregnancy Details </Text>
              <Text style={styles.skip}> Skip  </Text>
          </View>

          <View style={{flexDirection:'row',  margin: 15,}}>
       <DatePicker
                style={{width: 80}}
                date={this.state.dateal}
                mode="date"
                placeholder="Al Date Done"
                format="DD-MM-YYYY"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                 
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 60,
                    
                },
                dateInput: {
                    marginLeft: 1,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgrey',
                    
                },
                }}
                onDateChange={(dateal) => {this.setState({dateal: dateal})}} 
             /> 

            <View style={{}}>
                <Text style={{fontSize:12, marginLeft:30}}>Heat Sequence</Text>
                 <Picker
                    style={{ width: 100, marginTop:-15, marginLeft:40}}
                    mode="dropdown"
                    selectedValue={this.state.heatsequence}
                    onValueChange={(heatseq) => this.setState({heatsequence: heatseq})}>
      
                    <Picker.Item label="" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
                <View style={{ borderBottomWidth:1, borderBottomColor: 'lightgrey',marginTop: -12, marginLeft: 30, width: 100}}></View>
          </View>

             <DatePicker
                style={{width: 100}}
                date={this.state.datepd}
                mode="date"
                placeholder="PD Check Date"
                format="DD-MM-YYYY"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                 
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 75,
                    
                },
                dateInput: {
                    marginLeft: 12,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgrey',
                    
                },
                }}
                onDateChange={(datepd) => {this.setState({datepd: datepd})}} 
             /> 

       </View>

        <View style={styles.pregnancyal}>
          <Text style={styles.pregnancydaystext}>Pregnancy Days</Text>
              <Picker style={{width: 80,}}
                    mode="dropdown"
                     selectedValue={this.state.pregnancydays}
                     onValueChange={(pregnday) => this.setState({pregnancydays: pregnday})}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
              </Picker>
            <TextInput style={styles.dayssinceinput} placeholder='Days Since Al ' />
       </View><View style={styles.pregnancybottonline}></View>

         <View style={styles.siretypesearch}>
          <TextInput style={styles.siretype} placeholder='Sire Type ' />
           <TextInput style={styles.search} placeholder='' />
           <Icon style={styles.searchicon} name="ios-search" size={16} color="#000"/>
       </View>

        <View style={styles.buttoncopyright}>
              <View style={styles.buttonstyle}>
                  <Button  title="Next" color="#009688"  onPress={() => this.props.navigation.navigate('BreedInformation3')}/>
              </View>
              <Text style={styles.copyright}> Copyright @2018 Steelapp</Text>
        </View>


          </View>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'white', //'#f2f2f2',
  },

  subcontainer : {
    backgroundColor:'white',
  },

  marginall : {
    marginLeft: 15,
    marginRight: 15,
   },

   profiledashboard: {
    color: 'grey',
    fontSize: 12,
},

breedinfo: {
  color: 'black',
  fontSize: 12,
},

  currentbreedingstatetext : {
    fontSize: 12,
  },

  currentbreedingstatepicker : {
    width: 335, 
    marginTop:-15, 
  },

  currentbreedingstate: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10
  },

  pregnancydetails: {
    color: 'black',
    fontSize: 12,
    marginTop: 15,
},

currntkidirection : {
  flexDirection:'row',
},

skip : {
  fontSize: 12,
  marginTop: 15,
  marginLeft: 150,
},

pregnancyal : {
  flexDirection:'row',
},

pregnancydaystext : {
  marginLeft :15,
  fontSize: 12, 
},

pregnancybottonline : {
  borderBottomWidth: 1, 
  borderBottomColor: 'lightgrey', 
  marginTop: -10, 
  marginLeft :15, 
  width:158
},

dayssinceinput : {
  height: 40,    
  marginLeft:5,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:160,
},


siretypesearch : {
  flexDirection:'row'
},

siretype : {
  height: 40,   
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:160,
},

search : {
  height: 40,   
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:158,
},

searchicon : {
  marginLeft: 20,
  marginTop: -25,
  paddingBottom: 25,
  },
  

buttoncopyright : {
  flexDirection:'column', 
  marginTop: 60
},

buttonstyle : {
  width: "90%", 
  marginLeft: 20,
},

copyright :{
  textAlign: 'center',
  marginTop:85,
  marginBottom:10,
  fontSize: 12,
}

});
