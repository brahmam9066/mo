/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Picker, ScrollView, Button} from 'react-native';

import {RkButton, RkChoice} from 'react-native-ui-kitten';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'

export default class Registercattle extends Component {


  constructor(props) {
    super(props);
    this.state = {
      sex: '',
      datofbirth : '',
      species : '',
      breed : '',
      sire : '',
      siretype : '',
      dam : '',
      damtype: '',
      livestockstate : '',

     
      data: [
        {
            label: 'Farm Bred',
            color: '#009688',
            size: 14,
        },
        {
            label: 'Purchase',
            color: '#009688',
            size: 14,
        },
     
    ],
    }  
  }

    onPress = data => this.setState({ data });
  render() {

        // let data = [{
        //   value: 'Male',
        // }, {
        //   value: 'Female',
        // }, {
        //   value: 'Transgender',
        // }];

        // let birth = [{
        //   value: 'Foreign',
        // }, {
        //   value: 'nation',
        // }];

        // let species = [{
        //   value: 'species1',
        // }, {
        //   value: 'species2',
        // }];

        // let breed = [{
        //   value: 'breed',
        // }, {
        //   value: 'breed',
        // }];

        // let sire = [{
        //   value: 'sire1',
        // }, {
        //   value: 'sire2',
        // }];

        // let siretype = [{
        //   value: 'siretype1',
        // }, {
        //   value: 'siretype2',
        // }];

        // let dam = [{
        //   value: 'dam1',
        // }, {
        //   value: 'dam2',
        // }];

        // let damtype = [{
        //   value: 'damtype1',
        // }, {
        //   value: 'damtype2',
        // }];

        // let livestockstate = [{
        //   value: 'livestockstate1',
        // }, {
        //   value: 'livestockstate2',
        // }];



    return (
      <ScrollView style={styles.container}>

        <View style={styles.marginall}>
             <Text style={styles.profiledashboard}>{"\n"} Home / mooON Dashboard / Register cattle {"\n"}</Text>
             <Text style={styles.profileinfo}>Profile Information</Text>
        </View>

           
        <View style={[styles.radiobtn, styles.marginall]}>
            <RadioGroup flexDirection='row'  radioButtons={this.state.data} onPress={this.onPress} />
        </View>

        <View style={[styles.marginall, styles.topline]}>
            <Text style={styles.regid}> Registration Id</Text>
        </View>

        <View style={styles.sexbirth}>
                <View style={{marginLeft: 15}}>
                    <Text style={styles.sextext}> Sex </Text>
                       <Picker style={styles.sexpicker}
                              mode="dropdown"
                              selectedValue={this.state.sex}
                          onValueChange={(sx) => this.setState({sex: sx})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                      </Picker>
                      <View style={styles.sexbirthbottomline}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.typeofbirthtext}> Type Of Birth </Text>
                        <Picker style={styles.typeofbirthpicker}   
                              mode="dropdown"
                              selectedValue={this.state.dateofbirth}
                          onValueChange={(dob) => this.setState({dateofbirth: dob})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="normal" value="normal" />
                        <Picker.Item label="Abnormal" value="abnormal" />
                      </Picker>
                      <View style={styles.sexbirthbottomline}></View>
                </View>
            </View>

        <View style={{flexDirection:'row', marginTop:-12}}>
        <TextInput style={styles.ageinput}  placeholder="Age(Yrs)"/>
             <DatePicker
                style={{width: 180,  marginTop:15}}
                date={this.state.date}
                mode="date"
                placeholder="Date Of Birth"
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
                    marginLeft: 150,
                    
                },
                dateInput: {
                    marginLeft: 25,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 0.5,
                    
                },
                
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
             />
        </View>

        <View style={styles.speciesbreed}>
                <View style={{marginLeft: 15}}>
                    <Text style={styles.speciestext}> Species </Text>
                       <Picker style={styles.speciespicker}
                              mode="dropdown"
                              selectedValue={this.state.species}
                          onValueChange={(spes) => this.setState({species: spes})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Species" value="species" />
                        <Picker.Item label="Species1" value="species1" />
                        <Picker.Item label="Species2" value="species2" />
                        <Picker.Item label="Species3" value="species3" />
                      </Picker>
                      <View style={styles.speciesbreedbottomline}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.breedtext}> Breed </Text>
                        <Picker style={styles.breedpicker}   
                              mode="dropdown"
                              selectedValue={this.state.breed}
                          onValueChange={(bred) => this.setState({breed: bred})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Jersey" value="jersey" />
                        <Picker.Item label="Jersey1" value="jersey1" />
                        <Picker.Item label="Jersey2" value="jersey2" />
                        <Picker.Item label="Jersey3" value="jersey3" />
                      </Picker>
                      <View style={styles.speciesbreedbottomline}></View>
                </View>
            </View>

         <View style={styles.siresiretype}>
                <View style={{marginLeft: 15}}>
                    <Text style={styles.siretext}> Sire# </Text>
                       <Picker style={styles.sirepicker}
                              mode="dropdown"
                              selectedValue={this.state.sire}
                          onValueChange={(sir) => this.setState({sire: sir})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Sire Breed" value="sire breed" />
                        <Picker.Item label="Sire Breed1" value="sire breed1" />
                        <Picker.Item label="Sire Breed2" value="sire breed2" />
                        <Picker.Item label="Sire Breed3" value="sire breed3" />
                      </Picker>
                      <View style={styles.siresiretypebottomline}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.siretypetext}> Sire Type </Text>
                        <Picker style={styles.siretypepicker}   
                              mode="dropdown"
                              selectedValue={this.state.brsiretypeeed}
                          onValueChange={(sirtype) => this.setState({siretype: sirtype})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Sire Breed" value="sire breed" />
                        <Picker.Item label="Sire Breed1" value="sire breed1" />
                        <Picker.Item label="Sire Breed2" value="sire breed2" />
                        <Picker.Item label="Sire Breed3" value="sire breed3" />
                      </Picker>
                      <View style={styles.siresiretypebottomline}></View>
                </View>
            </View>

        <View style={styles.damdamtype}>
                <View style={{marginLeft: 15}}>
                    <Text style={styles.damtext}> Dam# </Text>
                       <Picker style={styles.dampicker}
                              mode="dropdown"
                              selectedValue={this.state.dam}
                          onValueChange={(dm) => this.setState({dam: dm})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Dam Breed" value="dam breed" />
                        <Picker.Item label="Dam Breed1" value="dam breed1" />
                        <Picker.Item label="Dam Breed2" value="dam breed2" />
                        <Picker.Item label="Dam Breed3" value="dam breed3" />
                      </Picker>
                      <View style={styles.damdamtypebottomline}></View>
                </View>

                 <View style={{ marginLeft:15, }}>
                    <Text style={styles.damtypetext}> Dam Type </Text>
                        <Picker style={styles.damtypepicker}   
                              mode="dropdown"
                              selectedValue={this.state.damtype}
                          onValueChange={(dmtype) => this.setState({damtype: dmtype})}>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Dam Breed" value="dam breed" />
                        <Picker.Item label="Dam Breed1" value="dam breed1" />
                        <Picker.Item label="Dam Breed2" value="dam breed2" />
                        <Picker.Item label="Dam Breed3" value="dam breed3" />
                      </Picker>
                      <View style={styles.damdamtypebottomline}></View>
                </View>
            </View>

         <View style={styles.marginall}>
          <Text style={styles.livestockstatetext}>Livestock State</Text>
          <Picker style={styles.livestockstatepicker}
                    mode="dropdown"
                     selectedValue={this.state.livestockstate}
                onValueChange={(livestack) => this.setState({livestockstate: livestack})}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Natinal" value="national" />
                    <Picker.Item label="International" value="International" />
            </Picker>
            <View style={styles.livestockstate}></View>
          </View>

        {/* <View style={styles.sexbirth}>
          <Dropdown  label='Sex' data={data}  fontSize={12} containerStyle={{width:152,zIndex:60, left:15 }}/>
          <Dropdown  label='Type of Birth' birth={birth}  fontSize={12}  containerStyle={{width:152,zIndex:60, left:40 }}/>
        </View> */}

        {/* <View style={styles.speciesbreed}>
          <Dropdown  label='Species' species={species}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Breed' breed={breed}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View> */}

         {/* <View style={styles.siretype}>
          <Dropdown  label='Sire#' sire={sire}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Sire Type' siretype={siretype}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View> */}
   

         {/* <View style={styles.damtype}>
          <Dropdown  label='Dam#' dam={dam}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Dam Type' damtype={damtype}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View> */}

        {/* <View style={styles.livestockstate}>
          <Dropdown  label='Livestock State' livestockstate={livestockstate}  fontSize={12}  containerStyle={{width:331,zIndex:60, top:1,left:15 }}/>
        </View> */}

         <View style={styles.buttoncopyright}>
           <View style={styles.buttonstyle}>
              <Button  title="Next" color="#009688"  onPress={() => this.props.navigation.navigate('BreedInformation1')}/>
          </View>
            <Text style={styles.copyright}> Copyright @2018 Steelapp</Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
   
  },
  marginall : {
   marginLeft: 15,
   marginRight: 15
  },
  profiledashboard: {
    color: 'grey',
    fontSize: 12,
},

  profileinfo: {
      color: 'black',
      fontSize: 12,
  },
  radiobtn : {
      flexDirection:'row',
      justifyContent: 'flex-start',
      marginTop: 10
  },
  regid : {
    // color: 'grey',
    fontSize: 12,
    marginTop: 10,
  },

  topline: {
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    height: 40,
    // paddignTop: 10
  },
  // sexbirth : {
  //   flexDirection:'row', 
  //   marginTop:-12
  // },

  sexbirth : {
    flexDirection:'row',
  },
  
  sextext : {
    marginTop:15,
    fontSize: 12,
  },
  
  sexpicker : {
    width: 160, 
    marginTop:-15
  },
  
  typeofbirthtext : {
    marginTop:15,
    fontSize: 12,
  },
  
  typeofbirthpicker : {
    width: 155, 
    marginTop:-15
  },
  
  sexbirthbottomline: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10,
  },

  agedob : {
    flexDirection:'row',
    marginTop:-12
  },

  ageinput : {
    marginTop:15,
    height: 40, 
    width: 152, 
    marginLeft:15, 
    borderBottomColor: '#e1e1e1',  
    borderBottomWidth: 1, 
    fontSize: 12,
  },

  // speciesbreed : {
  //   flexDirection:'row',
  //    marginTop:-12
  // },

  speciesbreed : {
    flexDirection:'row',
  },
  
  speciestext : {
    marginTop:15,
    fontSize: 12,
  },
  
  speciespicker : {
    width: 160, 
    marginTop:-15
  },
  
  breedtext : {
    marginTop:15,
    fontSize: 12,
  },
  
  breedpicker : {
    width: 155, 
    marginTop:-15
  },
  
  speciesbreedbottomline: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10,
  },

  // siretype : {
  //   flexDirection:'row', 
  //   marginTop:-12
  // },

  siresiretype : {
    flexDirection:'row',
  },
  
  siretext : {
    marginTop:15,
    fontSize: 12,
  },
  
  sirepicker : {
    width: 160, 
    marginTop:-15
  },
  
  siretypetext : {
    marginTop:15,
    fontSize: 12,
  },
  
  siretypepicker : {
    width: 155, 
    marginTop:-15
  },
  
  siresiretypebottomline: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10,
  },

  // damtype : {
  //   flexDirection:'row', 
  //   marginTop:-12
  // },

  damdamtype : {
    flexDirection:'row',
  },
  
  damtext : {
    marginTop:15,
    fontSize: 12,
  },
  
  dampicker : {
    width: 160, 
    marginTop:-15
  },
  
  damtypetext : {
    marginTop:15,
    fontSize: 12,
  },
  
  damtypepicker : {
    width: 155, 
    marginTop:-15
  },
  
  damdamtypebottomline: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10,
  },


  // livestockstate : {
  //   flexDirection:'row', 
  //   marginTop:-12
  // },

  livestockstatetext : {
    fontSize: 12,
    marginTop:10,
  },

  livestockstatepicker : {
    width: 335, 
    marginTop:-15, 
  },
  livestockstate: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: -10
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
    marginTop:10,
    marginBottom:10,
    fontSize: 12,
  }


});
