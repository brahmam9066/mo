/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { SearchBar } from 'react-native-elements';
import {Avatar,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const tintColor= 'white'
export default class Activitylog extends Component {
  render() {
    return (
      <View style={styles.container}>
    
        <View style={styles.subcontainer}>
            <SearchBar inputStyle={{ color: '#CCCCCC' }}
                placeholder=" Search cattle"
                lightTheme
                inputStyle={styles.searchBarInput}
                icon={{ color: tintColor, size: '52'}}
              clearIcon={{name: 'search'}}
              />

            <View style={styles.directoryname}>
                <View style={styles.marginall}>
                    <Text style={styles.profiledash}>{"\n"} Home / Registration / Activity Log  {"\n"} </Text>
                </View>
                <View style={[styles.doticon]}>
                    <Icon name='more-vert' size={20} color={'grey'} ref={this.onRef} />
                </View>
            </View>

            <View style={styles.profinfo}>
              <View>
                  <Avatar
                    medium
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginLeft: 20, }}
                  />
              </View>

                <View style={{marginLeft:20,}}>
                  <Text style={styles.textsize}> Registration Id : HMS123456 </Text>
                  <Text style={styles.textsize}> Location :<Text  style={styles.textcolor}> Milking </Text></Text>
                  <Text style={styles.textsize}> Breeding : <Text style={styles.textcolor}> Open </Text></Text>
                  <Text style={styles.textsize}> Organization : <Text style={styles.textcolor}> Akshaykalpa OrgANIC mILK </Text></Text>
      
                </View>
              
            </View>

            <View style={[styles.marginall, styles.topline]}>
            </View>

            <View>
            <Text style={[styles.marginall, styles.summary]}>Summary</Text>
            <Text style={[styles.marginall, styles.stomps]}>No of Stomps : 4</Text>
            </View>

          <Text style={styles.copyright}> Copyright @2018 Steelapp</Text>

        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#f2f2f2',
  },

  suncontainer : {
    backgroundColor:'white',
     paddingBottom: 380
  },
   
  searchBarInput: {
    color: tintColor,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.2,
  },

  directoryname : {
    flexDirection:'row'
  },

  profinfo : {
    flexDirection:'row'
  },

  marginall : {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 12,
   },

   doticon : {
     flexDirection: 'row',
     marginLeft: 100,
   },

   profiledash : {
    fontSize: 12,
   },

   textsize : {
    fontSize:12,
    color:'black'
   },

   textcolor : {
     color: 'grey'
   },
   topline: {
    flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
    height:14,
    // width:500
    // paddignTop: 10
  },

  summary :{
    fontSize: 13,
    marginTop: 25,
    color: 'black'
  },

  stomps :{
    fontSize: 12,
    marginTop: 10,
    color: 'black'
  },

  copyright :{
    textAlign: 'center',
    marginTop:230,
    fontSize: 12,
  }
});
