/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, Button, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

import flatListData from '../data/registartiondata/flatListData';

import FlatListItem from './FlatListItem'


class BreedInformation4 extends Component {
  render() {
    return (
        
        <View style={styles.container}>
                 <FlatList
                   data={flatListData}
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
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
})

export default withNavigation(BreedInformation4);

