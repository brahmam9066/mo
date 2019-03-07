import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class SaveandPerformAi extends Component{
    static navigationOptions = {
        title: 'AI Service Type',
      };
    render(){
        return(
            <View style={{backgroundColor:'white',height:'100%'}}>
              <Text style={styles.text}>Home/Farm Admin/Breed/AI Service Type/AI Service Entry</Text>
                <View>
                   <TextInput  style={styles.textinput}
                            placeholder='Enter Service Type'
                            autoCapitalize='none'
                            />
                    <Icon style={styles.searchIcon} name="caret-down" size={20}/>
                </View>

                <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                        <View style={{borderColor: 'gray',height:40,borderWidth:1,width:150}}>
                                <Text>AI</Text>
                               <Icon style={styles.searchIcon} name="close" size={13 } color="gray"/>  
                        
                        </View>  
                        <View style={{borderColor: 'gray',height:40,borderWidth:1,width:150}}>
                                <Text>Natural</Text> 
                                <Icon style={styles.searchIcon} name="close" size={13 } color="gray"/>
                        </View>      
                   </View> 

                    <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                        <View style={{borderColor: 'gray',height:40,borderWidth:1,width:150}}>
                                <Text>Skip</Text> 
                                <Icon style={styles.searchIcon} name="close" size={13 } color="gray"/> 
                        
                        </View>  
                        <View style={{borderColor: 'gray',height:40,borderWidth:1,width:150}}>
                                <Text>Embryo Transfer</Text> 
                                <Icon style={styles.searchIcon} name="close" size={13 } color="gray"/>
                        </View>      
                   </View>  

                <View style={styles.list}>
                       <View style={{justifyContent:'center',alignContent:'center',width:350,marginLeft:27,marginTop:20}}>
                       <TouchableOpacity>
                            <Button 
                              onPress={ () => this.props.navigation.navigate('AIServices') }
                              style={styles.button}
                                    title = "Save"
                                    color = "#0AC0A2"
                                />
                        </TouchableOpacity>
                       </View>

                         <View style={{justifyContent:'center',width:350,marginLeft:27,marginTop:20,alignItems:'center',borderWidth:1,
                                  borderColor: 'gray',height:40}}>
                           <Text style={{ color :'#0AC0A2',fontSize:16}}>Add More</Text>
                        </View>

                        <View style={{justifyContent:'center',width:350,marginLeft:27,marginTop:20,alignItems:'center',borderWidth:1,
                                  borderColor: 'gray',height:40}}>
                           <Text style={{ color :'#0AC0A2',fontSize:16}}>Delete AI</Text>
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
    marginLeft:20,
    marginTop:15
    },
    textinput:
    {
        borderBottomWidth: 2,
        borderBottomColor: '#DCD8D8',
        color: '#000',
        paddingBottom:20
    },
    searchIcon: {
        position:'absolute',
        right: 12 ,
        padding:5,
        marginTop:5
   },

})
