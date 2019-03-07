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

export default class BreedInformation1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentbreedingstate: '',
      heatsequence : '',
      pregnancydays : '',
      dayssinceal : '',
      siretype : '',
     
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

          <View style={[styles.marginall]}>
              <Text style={styles.pregnancydetails}> Pregnant </Text>
          </View>

          <View style={{flexDirection:'row',  margin: 15,}}>

            <View style={{}}>
                <Text style={{fontSize:12,}}>Heat Sequence</Text>
                 <Picker
                    style={{ width: 130, marginTop:-15, marginLeft:30}}
                    mode="dropdown"
                    selectedValue={this.state.heatsequence}
                    onValueChange={(heatseq) => this.setState({heatsequence: heatseq})}>
      
                    <Picker.Item label="" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
                <View style={{ borderBottomWidth:1, borderBottomColor: 'lightgrey',marginTop: -12,  width: 155}}></View>
          </View>

             <DatePicker
                style={{width: 170}}
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
                    marginLeft: 140,
                    
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
                <View style={{marginLeft: 15}}>
                    <Text style={styles.pregnancydaystext}>Pregnancy days</Text>
                       <Picker style={styles.pregnancydayspicker}
                              mode="dropdown"
                              selectedValue={this.state.pregnancydays}
                          onValueChange={(pregndays) => this.setState({pregnancydays: pregndays})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                      </Picker>
                      <View style={styles.pregnancysinceal}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.dayssincealtext}>Days Since Al </Text>
                        <Picker style={styles.dayssincealpicker}   
                              mode="dropdown"
                              selectedValue={this.state.dayssinceal}
                          onValueChange={(daysal) => this.setState({dayssinceal: daysal})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="" value="" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                      </Picker>
                      <View style={styles.pregnancysinceal}></View>
                </View>
            </View>

         <View style={styles.siretypedone}>
           <Text style={styles.siretypetext}>Sire Type </Text>
             <Picker style={{width: 80, marginLeft:40}}
                    mode="dropdown"
                     selectedValue={this.state.siretype}
                onValueChange={(siretyp) => this.setState({siretype: siretyp})}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
            </Picker>
            <TextInput style={styles.donebyinput} placeholder='Done By ' />
       </View><View style={styles.siretypetbottonline}></View>

        <View style={styles.buttoncopyright}>
              <View style={styles.buttonstyle}>
                  <Button  title="Save" color="#009688"  onPress={() => this.props.navigation.navigate('BreedInformation4')}/>
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

pregnancyal : {
  flexDirection:'row',
},

pregnancydaystext : {
  marginTop:15,
  fontSize: 12,
},

pregnancydayspicker : {
  width: 160, 
  marginTop:-15
},

dayssincealtext : {
  marginTop:15,
  fontSize: 12,
},

dayssincealpicker : {
  width: 155, 
  marginTop:-15
},

pregnancysinceal: {
  borderBottomWidth: 1,
  borderBottomColor: 'lightgrey',
  marginTop: -10,
},

siretypedone : {
  flexDirection:'row',
},

siretypetext : {
  marginLeft :15,
  fontSize: 12, 
  marginTop: 10,
},


siretypetbottonline : {
  borderBottomWidth: 1, 
  borderBottomColor: 'lightgrey', 
  marginTop: -10, 
  marginLeft :15, 
  width:158
},

donebyinput : {
  height: 40,    
  marginLeft:45,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:155,
  marginLeft :5,
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
  marginTop:65,
  marginBottom:10,
  fontSize: 12,
}

});
