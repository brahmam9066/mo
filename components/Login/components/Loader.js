import React, {Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';

export default class Loader extends Component{
  render() {
    return (
      <View style={styles.conntainer}>
        <TouchableOpacity><Image source = {require('../images/img2.jpg')}/></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conntainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  }
});

