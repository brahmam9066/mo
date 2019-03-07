import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, Button, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

import flatListData from '../data/registartiondata/flatListData';

import { SearchBar } from 'react-native-elements';
import {Avatar,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const tintColor= 'white';

 class FlatListItem extends Component {
     render() {
       return(
          <View style={styles.container}>
               
               <View style={styles.profilecontainer}>
                      <SearchBar inputStyle={{ color: '#CCCCCC' }}
                      placeholder=" Search cattle"
                      lightTheme
                      inputStyle={styles.searchBarInput}
                      icon={{ color: tintColor, size: '52'}}
                      clearIcon={{name: 'search'}}
                      />

                    <View style={styles.marginall}>
                        <Text style={styles.profiledash}>{"\n"} Home / Registration / Activity Log  {"\n"} </Text>
                    </View>

                    <View style={styles.profilephotocontainer}>
                      <View>
                          <Avatar
                            medium
                            rounded
                            icon={{name: 'user', type: 'font-awesome'}}
                            activeOpacity={0.7}
                            // containerStyle={{marginLeft: -10} }
                          />
                      </View>

                        <View>
                          <Text style={styles.purchased}> Purchased </Text>
                        </View>
                        <View>
                        <Text style={styles.edit}>Edit {"\n"}</Text>
                        </View>
    
                      </View>

                </View>
                <View style={styles.afterprofilewidth}></View>

              <View style={styles.profileallcontainer}>
             
                <View style={styles.profileinfocontainer}>
                       <View>
                         <Image style={{width:40, height:40}} source={require('../asset/images/registration.png')}></Image>
                       </View>
                        <View style={{flexDirection:'column'}}>
                           <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={{ color:'black'}}> Profile Information</Text>
                           </View>
                            <View>
                                  <View style={{flexDirection:'row'}}>
                                      <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}> Reg Id : </Text> {this.props.item.regid}</Text> 
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Species : </Text>{this.props.item.species}</Text>
                                        <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Breed : </Text>{this.props.item.breed1}</Text>
                                    </View>

                                  <View style={{flexDirection:'row'}}>
                                        <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Age(Yrs) : </Text>{this.props.item.age}</Text>
                                        <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Date Of birth : </Text> {this.props.item.dateofbirth}</Text>
                                  </View>
                                  <View style={{flexDirection:'row'}}>
                                        <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Sire Type : </Text>{this.props.item.siretype}</Text>
                                        <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Dam Type : </Text>{this.props.item.damtype}</Text>
                                  </View>

                                  <View>
                                  <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Status : </Text>{this.props.item.status}</Text>
                                  </View>

                            </View>
                        </View>

                        <View>
                           <Text onPress={() => this.props.navigation.navigate('Registercattle')}> Edit</Text>
                        </View>
                  </View>     

              
               <View style={{ borderBottomWidth:1, borderBottomColor: 'lightgrey',marginTop: 22}}></View>

              {/* <View style={styles.profileinfobackcolor}> */}
                  <View style={styles.profilebreedcontainer}>
                    <Image style={{width:40, height:40}} source={require('../asset/images/nutrition.png')}></Image>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row', justifyContent: 'space-between', fontSize:18, }}>
                           <Text style={{fontSize:18, color:'black'}}> Breed Information</Text>
                           <Text style={styles.editbreedinfobtn} onPress={() => this.props.navigation.navigate('BreedInformation1')}> Edit</Text>
                        </View>
                         <View>
                           <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Location : </Text>{this.props.item.location}</Text>
                           <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Breeding State : </Text>{this.props.item.breedingstatus}</Text>
                           <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Number Of Calving : </Text>{this.props.item.numberofcalving}</Text>
                         </View>

                         <View >

                           <View style={{flexDirection:'row', justifyContent: 'space-between', fontSize:18, }}>
                             <Text style={{ color:'black', marginTop:30}}> Previous Pregnancy Details</Text>
                             <Text style={styles.editprevpregnfobtn} onPress={() => this.props.navigation.navigate('BreedInformation1')}> Edit</Text>
                           </View>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Al Date : </Text>{this.props.item.aldate}</Text>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Al Done : </Text>{this.props.item.aldone}</Text>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Heat Sequence : </Text>{this.props.item.heatsequence1}</Text>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>PD Check Date : </Text>{this.props.item.pdcheckdate}</Text>
                          <View style={{flexDirection:'row'}}>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Pregnancy Days : </Text>{this.props.item.pregnancydays}</Text>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Days Since Al : </Text>{this.props.item.dayssinceal}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Sire Type : </Text>{this.props.item.siretype}</Text>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Done By : </Text>{this.props.item.doneby}</Text>
                          </View>

                            <View style={{flatlistitemText:'column'}}>
                              <Text style={{ marginTop:6}}> </Text>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Pregnancy Date : </Text>{this.props.item.pregnancydate}</Text>
                                  <View style={{flexDirection:'row'}}>
                                      <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Sire Type : </Text>{this.props.item.siretype}</Text>
                                      <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Delivery Type : </Text>{this.props.item.deliverytype}</Text>
                                  </View>
                                  <View style={{flexDirection:'row'}}>
                                      <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Calf Sex : </Text>{this.props.item.calfsex}</Text>
                                      <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Breed :</Text>{this.props.item.breed}</Text>
                                  </View>
                                  <View style={{flexDirection:'row'}}>
                                    <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Total Milk (Ltrs) : </Text>{this.props.item.totalmilk}</Text>
                                    <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Average Milk (Ltrs) : </Text>{this.props.item.averagemilk}</Text>
                                  </View>
                          </View>
                           
                       </View>

                    </View>
                </View>




             <View style={{ borderBottomWidth:1, borderBottomColor: 'lightgrey',marginTop: 22}}></View>

             
             <View style={styles.curentpregnancycontainer}>
                  <View>
                    <Image style={{width:40, height:40}} source={require('../asset/images/registration.png')}></Image>
                  </View>
                  <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                             <Text style={{ color:'black'}}> Current Pregnancy Details</Text>     
                      </View>
                       <View>
                          <View>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Breeding State : </Text>{this.props.item.breedingstate1}</Text>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Heat Sequence : </Text> {this.props.item.heatsequence2}</Text>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Al Date : </Text>{this.props.item.aldate}</Text>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Days Since Al : </Text>{this.props.item.dayssineal}</Text> 
                          </View>
                          <View style={{flexDirection:'row'}}>
                              <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Sire type : </Text>{this.props.item.siretype}</Text>
                               <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Inseminator : </Text>{this.props.item.inseminator}</Text>
                          </View>
                          <View>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Number Of Dose : </Text>{this.props.item.numberofdose}</Text>
                          </View>
                      </View>
                  </View>

                  <View>
                     <Text onPress={() => this.props.navigation.navigate('BreedInformation2')}> Edit</Text>
                  </View>
                </View>


                 <View style={{ borderBottomWidth:1, borderBottomColor: 'lightgrey',marginTop: 22}}></View>

                  <View style={styles.breedingcontainer}>
                     <View>
                       <Image style={{width:40, height:40}} source={require('../asset/images/registration.png')}></Image>
                     </View>
                     <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row', justifyContent: 'space-between' }}>
                             <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Breeding State : </Text>{this.props.item.breedingstate}</Text>   
                      </View>
                       <View>
                          <View>
                              <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Heat Sequence : </Text>{this.props.item.heatsequence3}</Text>
                              <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>PD Check Date : </Text>{this.props.item.pdcheckdate}</Text>
                                 
                          </View>
                          <View style={{flexDirection:'row'}}>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Pregnancy Days :</Text>{this.props.item.pregnancydays}</Text>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Days Since Al : </Text>{this.props.item.dayssineal}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                              <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Sire Type : </Text>{this.props.item.siretype}</Text>
                              <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Done By : </Text>{this.props.item.doneby}</Text>
                          </View>
                      </View>
                     </View>

                     <View>
                       <Text onPress={() => this.props.navigation.navigate('BreedInformation3')}> Edit</Text>
                     </View>
                </View>

                <View style={{ borderBottomWidth:1, borderBottomColor: 'lightgrey',marginTop: 22}}></View>

                <View style={styles.morphologicalcontainer}>
                   <View>
                   <Image style={{width:40, height:40}} source={require('../asset/images/registration.png')}></Image>
                   </View>
                     <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                             <Text style={{ color:'black'}}> Morphological  Details</Text>
                      </View>
                        <View>
                           <View style={{flexDirection:'row'}}>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Color : </Text>{this.props.item.color}</Text>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Number Of Horns : </Text>{this.props.item.numberofhorns}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}> Horn Shape : </Text>{this.props.item.hornshape}</Text>
                                <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Horn Size : </Text>{this.props.item.hornsize}</Text>
                            </View>

                          <View>
                          <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Visible Characteristics : </Text>{this.props.item.visiblecharacteritics}</Text>
                          </View>

                          <View style={{flexDirection:'row'}}>
                             <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Height : </Text>{this.props.item.height}</Text>
                             <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Body Weight : </Text>{this.props.item.bodyweight}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                              <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Body Length : </Text>{this.props.item.bodylength}</Text>
                               <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Birth Weight : </Text>{this.props.item.birthweight}</Text>
                          </View>

                          <View>
                            <Text style={styles.flatlistitem}> <Text style={styles.flatlistitemText}>Heart Grith : </Text>{this.props.item.heartgrith}</Text>
                          </View>

                      </View>
                     </View>

                     <View>
                     <Text > Edit</Text>
                     </View>
                </View>

            </View>

            <View style={styles.homeimageabovewidth}></View>

            <View style={styles.homeimage}>
              <Image source={ require('../asset/images/home.png')}></Image>  
            </View>  

          </View>
       )
     }
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
  
    profilecontainer : {
      backgroundColor: '#ffffff',
    }, 
  
    profileallcontainer : {
      backgroundColor: '#ffffff'
    },
  
    searchBarInput: {
      color: tintColor,
      backgroundColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 0.2,
    },
  
    afterprofilewidth : {
      height: 12,
    },
    
    marginall : {
      marginLeft: 15,
      marginRight: 15,
      fontSize: 12,
     },
  
     profiledash : {
      fontSize: 12,
     },
  
     profilephotocontainer : {
       flexDirection: 'row',
       justifyContent: 'space-between',
      paddingTop : 20,
      paddingRight : 10,
      paddingLeft : 20,
      paddingBottom:12
     },
  
     purchased : {
       fontSize: 18,
       color: 'black',
       paddingRight: 110,
       marginTop: 10,
     },
  
    edit : {
      marginTop: 20,
    },
  
    flatlistitem : {
      color: 'grey',
      padding : 5,
      fontSize: 12
  },
  
  flatlistitemText : {
    color: 'black',
  },
  
    profileinfocontainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign : 'center',
      marginTop: 10,
      paddingLeft: 20,
      paddingRight:20
    },
    
    profilebreedcontainer : {
      flexDirection:'row',
      justifyContent: 'space-around',
      marginLeft: 10,
      marginTop: 23,
      
    },
  
    editbreedinfobtn : {
      marginRight : 15,
    },
  
    editprevpregnfobtn : {
      marginRight : 15,
      marginTop:30
    },
  
    curentpregnancycontainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign : 'center',
      marginTop: 10,
      paddingLeft: 20,
      paddingRight:20
    },
  
    breedingcontainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign : 'center',
      marginTop: 10,
      paddingLeft: 20,
      paddingRight:20
    },
  
    morphologicalcontainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign : 'center',
      marginTop: 10,
      paddingLeft: 20,
      paddingRight:20
    },
  
   homeimage : {
    flexDirection: 'row', 
    justifyContent:'center', 
    backgroundColor:'#F5FCFF',
   },
  
   homeimageabovewidth : {
     height:15
   },
  
    
   
  });
  

  export default withNavigation(FlatListItem);