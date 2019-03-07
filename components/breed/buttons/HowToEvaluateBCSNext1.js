import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableHighlight} from 'react-native';

export default class HowToEvaluateBCSNext1 extends Component{
    static navigationOptions = {
        title: 'Body Condition Score',
      };

      state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render(){
        return(
            <View style={{backgroundColor:'white',height:'100%'}}>
                <Text style={styles.text}>Home/mooON Dashboard/Breed/Body Condition Score</Text>
             
                    <View style={{marginTop:20, marginLeft:10}}>
                           <View>
                               <TouchableHighlight>
                                <Text style={{fontWeight:'bold',color:'black', marginLeft:10}} onPress={ () => this.props.navigation.navigate('EvaluateBCSNext') }>Prev</Text>
                                </TouchableHighlight>  
                           </View>

                            <View style={{marginTop:10,marginLeft:10,}}>
                                <Text>Critical Points for Body Condition Scoring</Text>
                                <Text style={{fontWeight:'bold'}}>Image 4</Text>
                           </View>
                           <View style={styles.images}>
                              <Image source = {require('../asserts/evl4.png')}/>
                           </View>
                    </View>               

                    <View style={styles.box2}>
                        <View style={{flex:1}}>
                        <Text style={styles.footer} onPress={ () => this.props.navigation.navigate('EvaluateBCSNext')}>Copyright &copy; 2018 Stellapps</Text>
                        </View>
                    </View>
                
            </View>
        )
    }
}

const styles= StyleSheet.create({
    list:{
    marginTop:10
    },
    text:{
    marginLeft:12,
    marginTop:15
    },
    textinput:
    {
        borderBottomWidth: 2,
        borderBottomColor: '#DCD8D8',
        color: '#000',
        paddingBottom:20,
        marginLeft:10,
        marginRight:10,
    },
    searchIcon: {
        position:'absolute',
        right: 12 ,
        padding:5,
        marginTop:5
   },
   footer:
   {
       textAlign:'center',
       color:'gray'
   },
   box2:{
    marginTop:65
  },
  images:{
      marginTop:20
  }

})
