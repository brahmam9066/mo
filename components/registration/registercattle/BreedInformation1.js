/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Picker, Button, TextInput} from 'react-native';

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
          location: '',
            breedingstate: '',
            numberofcalving: '',

            heatsequence: '',
            pregnancydays: '',
            siretype : '',
            deliverytype : '',
            calfsex : '',
            breed : '',
         
          data: [
            {
                label: 'Yes',
                color: '#009688',
                size: 14,
            },
            {
                label: 'No',
                color: '#009688',
                size: 14,
            },
         
        ],
        }  
      }

      onPress = data => this.setState({ data });

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.subcontainer1}>

        <View style={styles.marginall}>
             <Text style={styles.profiledashboard}>{"\n"} Home / mooON Dashboard / Register cattle {"\n"}</Text>
             <Text style={styles.breedinfo}>Breed Information {"\n"}</Text>
         </View>

          <View style={styles.marginall}>
          <Text style={styles.locationtext}>Location</Text>
          <Picker style={styles.locationpicker}
                    mode="dropdown"
                     selectedValue={this.state.location}
                onValueChange={(loc) => this.setState({location: loc})}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Natinal" value="national" />
                    <Picker.Item label="International" value="International" />
            </Picker>
            <View style={styles.location}></View>
          </View>
            
          <View style={styles.marginall}>
          <Text style={styles.breedingtext}>Breeding State</Text>
          <Picker
                 style={styles.breedingstatepicker}
                 mode="dropdown"
                 selectedValue={this.state.breedingstate}
                 onValueChange={(breed) => this.setState({breedingstate: breed})}>
   
                 <Picker.Item label="" value="" />
                 <Picker.Item label="Pregnant" value="pragnant" />
                 <Picker.Item label="NonPragnant" value="nonPragnant" />
            </Picker>
            <View style={styles.breedingstate}></View>
          </View>

          <View style={styles.marginall}>
          <Text style={styles.noofcalvestext}>Number of Calving</Text>
          <Picker
                 style={styles.noofcalvepicker}
                 mode="dropdown"
                 selectedValue={this.state.numberofcalving}
                 onValueChange={(noofcalv) => this.setState({numberofcalving: noofcalv})}>
   
                 <Picker.Item label="" value="" />
                 <Picker.Item label="1" value="1" />
                 <Picker.Item label="2" value="2" />
                 <Picker.Item label="3" value="3" />
                 <Picker.Item label="4" value="4" />
            </Picker>
            <View style={styles.noofcalving}></View>
          </View>

          <View style={[styles.marginall, styles.prvskidirection]}>
          <Text style={styles.pregnancydetails}>Previous Pregnancy Details </Text>
          <Text style={styles.skip}> Skip  </Text>
          </View>

          <View style={[styles.radiobtn, styles.marginall]}>
            <Text style={styles.aldone}>Al Done : </Text>
            <RadioGroup flexDirection='row'  radioButtons={this.state.data} onPress={this.onPress} />
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
            <Picker
                  style={{ width: 80, }}
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

       <View style={styles.siresiretype}>
       <TextInput style={styles.sire} placeholder='Sire# ' />
       <TextInput style={styles.siretype} placeholder='Sire Type ' />
       </View>

       <View>
         <TextInput style={styles.doneby} placeholder='Done By ' />
         <Icon style={styles.searchicon} name="ios-search" size={16} color="#000"/>
       </View>
         
       
        </View>
        
        <View style={{backgroundColor:'#f2f2f2', height:10}}></View>

        <View styel={styles.subcontainer2}>

        <DatePicker
                style={{width: 330, marginLeft :15}}
                date={this.state.datepregnancy}
                mode="date"
                placeholder="Pregnancy Date"
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
                    marginLeft: 290,
                    
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
                onDateChange={(datepregnancy) => {this.setState({datepregnancy: datepregnancy})}} 
             /> 
             

            <View style={{flexDirection:'row'}}>
                <View style={{marginLeft: 15}}>
                    <Text style={styles.siretype1text}>Sire Type</Text>
                       <Picker style={styles.siretype1picker}
                              mode="dropdown"
                              selectedValue={this.state.siretype}
                          onValueChange={(sirtyp) => this.setState({siretype: sirtyp})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                      </Picker>
                      <View style={styles.location}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.deliverytypetext}>Delivery Type</Text>
                        <Picker style={styles.deliverytypepicker}   
                              mode="dropdown"
                              selectedValue={this.state.deliverytype}
                          onValueChange={(deltype) => this.setState({deliverytype: deltype})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Normal" value="normal" />
                        <Picker.Item label="Normal" value="normal" />
                      </Picker>
                      <View style={styles.location}></View>
                </View>
            </View>

             <View style={{flexDirection:'row'}}>
                <View style={{marginLeft: 15}}>
                    <Text style={styles.calfsextext}>Calf Sex</Text>
                       <Picker style={styles.calfsexpicker}
                              mode="dropdown"
                              selectedValue={this.state.calfsex}
                          onValueChange={(calfse) => this.setState({calfsex: calfse})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                      </Picker>
                      <View style={styles.location}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.breedtext}>Breed </Text>
                        <Picker style={styles.breedpicker}   
                              mode="dropdown"
                              selectedValue={this.state.breed}
                          onValueChange={(bred) => this.setState({breed: bred})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                      </Picker>
                      <View style={styles.location}></View>
                </View>
            </View>

            <View style={styles.Avtotalmilk}>
              <TextInput style={styles.avgmilk} placeholder='Average Milk(Ltrs)' />
              <TextInput style={styles.totalmilk} placeholder='Total Milk(Ltrs)' />
            </View>

            <View style={styles.buttoncopyright}>
              <View style={styles.buttonstyle}>
                  <Button  title="Next" color="#009688"  onPress={() => this.props.navigation.navigate('BreedInformation2')}/>
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

  subcontainer1 : {
    backgroundColor:'white',
  },

  subcontainer2 : {
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
  
  locationtext : {
    fontSize: 12,
  },

  locationpicker : {
    width: 335, 
    marginTop:-15, 
  },

  breedingstatepicker : {
    width: 335, 
    marginTop:-15, 
  },

  noofcalvepicker : {
    width: 335, 
    marginTop:-15, 

  },

  breedingtext : {
    marginTop:5,
    fontSize: 12,
  },

  noofcalvestext : {
    marginTop:5,
    fontSize: 12,
  },

  location: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10
  },

  breedingstate: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10
  },

  noofcalving: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10
  },

  pregnancydetails: {
    color: 'black',
    fontSize: 12,
    marginTop: 15,
},

prvskidirection : {
  flexDirection:'row',
},

skip : {
  fontSize: 12,
  marginTop: 15,
  marginLeft: 150,
},

aldone : {
  marginTop: 3
},

radiobtn : {
  flexDirection:'row',
  justifyContent: 'flex-start',
  marginTop: 10
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

siresiretype : {
  flexDirection:'row'
},

sire : {
  height: 40,   
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:160,
},

siretype : {
  height: 40,   
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:158,
},
    
doneby : {
  marginLeft :15,
  marginRight :15,
  height: 40,    
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  // width:160,
},

searchicon : {
marginLeft: 330,
marginTop: -25,
paddingBottom: 25,
},

siretype1text : {
  marginTop:15,
  fontSize: 12, 
},

siretype1picker : {
  width: 150,  
  marginTop:-15
},

deliverytypetext : {
  marginTop:15,
  fontSize: 12,
},

deliverytypepicker : {
  width: 160, 
  marginTop:-15
},

calfsextext : {
  marginTop:15,
  fontSize: 12,
},

calfsexpicker : {
  width: 160, 
  marginTop:-15
},

breedtext : {
  marginTop:15,
  fontSize: 12,
},

breedpicker : {
  width: 160, 
  marginTop:-15
},

Avtotalmilk : {
  flexDirection:'row'
},

avgmilk : {
  height: 40,   
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:160,
},

totalmilk : {
  height: 40,   
  marginLeft:15,  
  borderBottomColor: 'lightgrey',  
  borderBottomWidth: 1,  
  fontSize: 12, 
  width:158,
},

buttoncopyright : {
  flexDirection:'column', 
  marginTop: 15
},

buttonstyle : {
  width: "90%", 
  marginLeft: 20,
},

copyright :{
  textAlign: 'center',
  marginTop:5,
  marginBottom:10,
  fontSize: 12,
}

});
