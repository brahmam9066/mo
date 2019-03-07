/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import { SearchBar } from 'react-native-elements';
import {Avatar,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RegistersireData from '../data/registersiredata/RegistersireData';
import FlatListItem from './FlatListItem'


const tintColor = '#fafafa';

 class Registersire extends Component {
   
    render () {
      return (
          <View style={styles.container}>
  
              <FlatList
                data={RegistersireData}
                renderItem = { ({item, index}) => {
                    //  console.log('Item = ${JSON.Stringfy(item)}, index = ${index}')
                    return (
                        <FlatListItem item={item} index={index}>
  
                        </FlatListItem>
                    );
                }}
                keyExtractor={({id}, index) => id}
              >
              </FlatList>    
        </View>
      )
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

  });


  export default withNavigation(Registersire)