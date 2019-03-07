import React, {Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';

class ImgComponent extends Component{
  constructor(props){
    super(props);
  } 
  onPressGo =() =>{
    const navigator = this.props.navigation;
    navigator.navigate('loader');
    setTimeout(()=>navigator.navigate('signup'),1000);   
  };
  render() {
    return (
      <View style={styles.conntainer}>
        <TouchableOpacity onPress={this.onPressGo}><Image source = {require('../images/img1.jpg')}/></TouchableOpacity>
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

export default ImgComponent;
