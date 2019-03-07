
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import { SearchBar } from 'react-native-elements';
import {Avatar,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RegistersireData from '../data/registersiredata/RegistersireData';


const tintColor = '#fafafa';

  class FlatListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.searchcontainer}>
                <SearchBar 
                  placeholder=" Search cattle"
                  lightTheme
                  inputStyle={styles.searchBarInput}
                  icon={{ color: tintColor, size: '52'}}
                clearIcon={{name: 'search'}}
                />
            </View>

            <View>
                  <View style={styles.subcontainer}>
                      
                       <View style={styles.homeregcontainer}>
                          <View style={styles.homereg}>
                              <Text style={styles.registeranimaldashboard}>{"\n"} Home / Register Animal  / Animal Listening {"\n"}</Text>
                              
                          </View>
                          <View style={styles.doticon}>
                            <Icon name='more-vert' size={20} color={'grey'} />
                          </View>
                       </View>

                      <View style={styles.totalcontainer}>
                          <View style={styles.totalbox}>
                              <View style={styles.allboximage}>
                                <Image  source={require('../asset/images/total.png')} />
                                 <View>
                                  <Text>10</Text>
                                 </View>
                              </View>
                              <Text style={styles.allboxtexsize}> Total</Text>
                          </View>
                          <View style={styles.milkingbox}>
                          <View style={styles.allboximage}>
                                <Image source={require('../asset/images/milking.png')} />
                                 <View>
                                  <Text>{this.props.item.boxData.milking}</Text>
                                 </View>
                              </View>
                              <Text style={styles.allboxtexsize}> Milking</Text>
                          </View>
                          <View style={styles.dryoffbox}>
                          <View style={styles.allboximage}>
                                <Image source={require('../asset/images/dryoff.png')} />
                                 <View>
                                  <Text>{this.props.item.boxData.dryoff}</Text>
                                 </View>
                              </View>
                              <Text style={styles.allboxtexsize}> Dryoff</Text>
                          </View>
                          <View style={styles.calfbox}>
                          <View style={styles.allboximage}>
                                <Image source={require('../asset/images/calf.png')} />
                                 <View>
                                  <Text>{this.props.item.boxData.calf}</Text>
                                 </View>
                              </View>
                              <Text style={styles.allboxtexsize}> Calf</Text>
                          </View>
                      </View>
                  </View>

            </View>

            <View style={{marginTop:8}}></View>

            <TouchableOpacity style={styles.subcontainer2} onPress={() => this.props.navigation.navigate('AnimalDetails')}>

                  <View style={styles.subcontainerdatarow}>
                    <View>
                      <Avatar
                              small
                              rounded
                              icon={{name: 'user', type: 'font-awesome'}}
                              activeOpacity={0.7}
                              
                              />
                    </View>
                  <View style={styles.imagewithdata}>
                      <View style={styles.imgdata}>
                          <Image source={require('../asset/images/dryoff.png')} />
                        </View>
                        <View>
                          <Text style={styles.alltextsize}>Registration Id: <Text style={styles.flatlisttext}>{this.props.item.regLocationData.registrationId}</Text></Text>
                          <Text style={styles.alltextsize}>Location : <Text style={styles.flatlisttext}>{this.props.item.regLocationData.location}</Text></Text>
                          <Text style={styles.alltextsize}>Organisation : <Text style={styles.flatlisttext}>{this.props.item.regLocationData.organisation}</Text></Text>
                      </View>
                  </View>

                  <View style={styles.doticon}>
                        <Icon name='chevron-right' size={20} color={'grey'} />
                  </View>
            
                </View>
                <View style={styles.borderwidth}></View>
                
            </TouchableOpacity>

              <View style={styles.subcontainer2}>

                <View style={styles.subcontainerdatarow}>
                  <View>
                    <Avatar
                            small
                            rounded
                            icon={{name: 'user', type: 'font-awesome'}}
                            activeOpacity={0.7}
                            
                            />
                  </View>
                <View style={styles.imagewithdata}>
                    <View style={styles.imgdata}>
                        <Image source={require('../asset/images/dryoff.png')} />
                      </View>
                      <View>
                        <Text style={styles.alltextsize}>Registration Id: <Text style={styles.flatlisttext}>{this.props.item.regLocationData2.registrationId}</Text></Text>
                        <Text style={styles.alltextsize}>Location : <Text style={styles.flatlisttext}>{this.props.item.regLocationData2.location}</Text></Text>
                        <Text style={styles.alltextsize}>Organisation : <Text style={styles.flatlisttext}>{this.props.item.regLocationData2.organisation}</Text></Text>
                    </View>
                </View>

                <View style={styles.doticon}>
                      <Icon name='chevron-right' size={20} color={'grey'} />
                </View>

                </View>
                <View style={styles.borderwidth}></View>

                </View>

                <View style={styles.subcontainer2}>

              <View style={styles.subcontainerdatarow}>
                <View>
                  <Avatar
                          small
                          rounded
                          icon={{name: 'user', type: 'font-awesome'}}
                          activeOpacity={0.7}
                          
                          />
                </View>
              <View style={styles.imagewithdata}>
                  <View style={styles.imgdata}>
                      <Image source={require('../asset/images/dryoff.png')} />
                    </View>
                    <View>
                      <Text style={styles.alltextsize}>Registration Id: <Text style={styles.flatlisttext}>{this.props.item.regLocationData3.registrationId}</Text></Text>
                      <Text style={styles.alltextsize}>Location : <Text style={styles.flatlisttext}>{this.props.item.regLocationData3.location}</Text></Text>
                      <Text style={styles.alltextsize}>Organisation : <Text style={styles.flatlisttext}>{this.props.item.regLocationData3.organisation}</Text></Text>
                  </View>
              </View>

              <View style={styles.doticon}>
                    <Icon name='chevron-right' size={20} color={'grey'} />
              </View>

              </View>
              <View style={styles.borderwidth}></View>

              </View>

              <View style={styles.subcontainer2}>

              <View style={styles.subcontainerdatarow}>
                <View>
                  <Avatar
                          small
                          rounded
                          icon={{name: 'user', type: 'font-awesome'}}
                          activeOpacity={0.7}
                          
                          />
                </View>
              <View style={styles.imagewithdata}>
                  <View style={styles.imgdata}>
                      <Image source={require('../asset/images/dryoff.png')} />
                    </View>
                    <View>
                      <Text style={styles.alltextsize}>Registration Id: <Text style={styles.flatlisttext}>{this.props.item.regLocationData4.registrationId}</Text></Text>
                      <Text style={styles.alltextsize}>Location : <Text style={styles.flatlisttext}>{this.props.item.regLocationData4.location}</Text></Text>
                      <Text style={styles.alltextsize}>Organisation : <Text style={styles.flatlisttext}>{this.props.item.regLocationData4.organisation}</Text></Text>
                  </View>
              </View>

              <View style={styles.doticon}>
                    <Icon name='chevron-right' size={20} color={'grey'} />
              </View>

              </View>
              <View style={styles.borderwidth}></View>

              </View>

              <View style={styles.subcontainer2}>

            <View style={styles.subcontainerdatarow}>
              <View>
                <Avatar
                        small
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        activeOpacity={0.7}
                        
                        />
              </View>
            <View style={styles.imagewithdata}>
                <View style={styles.imgdata}>
                    <Image source={require('../asset/images/dryoff.png')} />
                  </View>
                  <View>
                    <Text style={styles.alltextsize}>Registration Id: <Text style={styles.flatlisttext}>{this.props.item.regLocationData5.registrationId}</Text></Text>
                    <Text style={styles.alltextsize}>Location : <Text style={styles.flatlisttext}>{this.props.item.regLocationData5.location}</Text></Text>
                    <Text style={styles.alltextsize}>Organisation : <Text style={styles.flatlisttext}>{this.props.item.regLocationData5.organisation}</Text></Text>
                </View>
            </View>

            <View style={styles.doticon}>
                  <Icon name='chevron-right' size={20} color={'grey'} />
            </View>

            </View>
            <View style={styles.borderwidth}></View>

            </View>


            <View style={styles.homeimageabovewidth}></View>

            <View style={styles.homeimage}>
               <Image source={ require('../asset/images/home.png')}></Image>  
            </View>

            
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    searchBarInput: {
      color: tintColor,
      backgroundColor: '#fafafa',
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 0.2,
    },
  
     registeranimaldashboard: {
      color: 'grey',
      fontSize: 12,
  },
  
  subcontainer : {
    backgroundColor:'#ffffff'
  },
  
  homeregcontainer : {
    backgroundColor: '#ffffff',
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingRight : 14,
    paddingLeft : 14
  },
  
  totalcontainer : {
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    paddingBottom:12
  },
  
  homereg : {
    flexDirection: 'row',
  },
  
  // doticon : {
  //   flexDirection: 'row',
  // },
  
  totalbox : {
     width:75, 
     height:50, 
     borderWidth:0.2
  },
  
  milkingbox : {
    width:75, 
    height:50, 
    marginLeft:-18, 
    borderWidth:0.2
  },
  
  dryoffbox : {
     width:75, 
     height:50, 
     marginLeft:-18, 
     borderWidth:0.2
  },
  
  calfbox : {
     width:75, 
     height:50, 
     marginLeft:-18, 
     borderWidth:0.2
  },
  
  allboximage : {
    flexDirection:'row', 
    justifyContent:'space-around', 
  },
  
  allboxtexsize : {
    fontSize:12
  },
  
  subcontainer2 : {
    backgroundColor:'#ffffff'
  },
  
  subcontainerdatarow : {
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    marginTop: 10, 
    marginBottom:10
  },
  
  imagewithdata : {
    flexDirection:"row", 
    justifyContent:'space-evenly'
  },
  imgdata :{
    marginRight: -12
  },
  
  borderwidth : {
    borderBottomWidth : 0.9, 
    borderBottomColor:'lightgrey', 
    marginLeft:10, 
    marginRight:10
  },
  
  alltextsize : {
    fontSize:12, 
    color:"black",
  },
  
  flatlisttext : {
    fontSize:12, 
    color:'grey'
  },
  
  homeimage : {
    flexDirection: 'row', 
    justifyContent:'center', 
    backgroundColor:'#F5FCFF',
   },
  
   homeimageabovewidth : {
     height:12
   }, 
  
  });


  export default withNavigation(FlatListItem);