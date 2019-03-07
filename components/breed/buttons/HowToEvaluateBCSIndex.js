import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";

export default class HowToEvaluateBCSIndex extends Component{
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
             
                    <View style={{marginTop:20,paddingBottom:20, marginLeft:10,borderBottomWidth: 2,  borderBottomColor: '#DCD8D8'}}>
                           <View>
                                <Text style={{fontWeight:'bold',color:'black'}}> How To Evaluate BCS?</Text>
                                <Text style={{position:'absolute',right: 24 ,padding:5,color:'black'}} onPress={ () => this.props.navigation.navigate('EvaluateBCSNext') }>Next</Text>
                           </View>

                            <View style={{marginTop:10,marginLeft:10,}}>
                                <Text>Critical Points for Body Condition Scoring</Text>
                                <Text style={{fontWeight:'bold'}}>Right Side Profile View</Text>
                           </View>
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Image source = {require('../asserts/evl1.png')} style={styles.images}/>
                           </View>
                    </View>               

                   
                   
                      <View style={{marginLeft:12,marginTop:5}}>
                        <Text style={{fontWeight:'bold',marginLeft:10}}>Rear Tail View</Text>
                         <Image source = {require('../asserts/evl2.png')} style={styles.images}/>
                       </View>

                    <View style={styles.box2}>
                        <View style={{flex:1}}>
                        <Text style={styles.footer} onPress={ () => this.props.navigation.navigate('BodyCondition')}>Copyright &copy; 2018 Stellapps</Text>
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
       color:'#B7B9B9'
   },
   box2:{
    marginTop:5
},

})
