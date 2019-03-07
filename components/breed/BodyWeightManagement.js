import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity,ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";

export default class BodyWeightManagement extends Component{
    static navigationOptions = {
        title: 'Body Weight Management',
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
             <ScrollView>
                <Text style={styles.text}>Home/mooON Dashboard/Breed/Body Condition Score</Text>
                <Icon style={styles.searchIcon} name="dots-three-vertical" size={20} color="gray" />
                    <View style={{marginLeft:12,marginTop:30}}>
                    <Text style={{color:'black',fontWeight:'bold'}}>Search</Text>
                    </View>

                        <View style={{marginTop:20,marginLeft:12 }}>
                            <Text>Cattle</Text>
                            </View> 

                    <View style={{marginLeft:10,marginRight:10,flexDirection:'row',justifyContent:'space-around',marginTop:10,borderBottomWidth: 2,borderBottomColor: '#DCD8D8',paddingBottom:10}}>
                            <View style={{borderColor: 'gray',height:40,borderWidth:1,width:150,marginRight:210}}>
                                <Text>Cattle1</Text>
                                <Icon style={styles.searchIcon} name="cross" size={13 } color="gray"/>
                            </View>
                            <View>
                            <Icon  name="triangle-down" size={20} color="gray"/>      
                            </View>    
                        
                    </View> 
                         <View>
                           <TextInput  style={styles.textinputBox}
                                    placeholder='Chest Width'
                                    autoCapitalize='none'
                                    />
            
                            <View style={{position:'absolute',right: 12 }}>
                                <TextInput  style={styles.textinputBox}
                                        placeholder='Body Length'
                                        autoCapitalize='none'
                                        />
                            </View>
                         </View>
                    
                        <TextInput  style={styles.textinput}
                                placeholder='Total Weight (Kg)'
                                autoCapitalize='none'
                                />

                        <View>
                           <TextInput  style={styles.textinput}
                                            placeholder='Date/Time'
                                            autoCapitalize='none'
                                            />
                            <Icon style={styles.searchIcon} name="calendar" size={20}/>
                        </View>
                        
                        <TextInput  style={styles.textinput}
                                placeholder='Done By'
                                autoCapitalize='none'
                                />
                                
                        <View>
                            <TextInput  style={styles.textinput}
                            placeholder='Measurement Type'
                            autoCapitalize='none'
                            />
                            <Icon style={styles.searchIcon} name="triangle-down" size={20} color="gray"/>
                        </View>

                         <View>
                            <TextInput  style={styles.textinput}
                            placeholder='Period'
                            autoCapitalize='none'
                            />
                            <Icon style={styles.searchIcon} name="triangle-down" size={20} color="gray"/>
                        </View>
                
                        <View style={{marginLeft:12,marginTop:20}}>
                            <TouchableOpacity>
                                <Text style={{fontWeight:'bold',color:'black',fontSize:14}} onPress={ () => this.props.navigation.navigate('HowToEvaluate')}>How to Evaluate BCS?</Text>
                            </TouchableOpacity>
                        </View> 

                        <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Image source = {require('./asserts/BWM.png')} style={styles.images}/>
                         </View>

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

                        <View style={styles.box2}>
                            <View style={{flex:1}}>
                            <Text style={styles.footer} onPress={ () => this.props.navigation.navigate('Home')}>Copyright &copy; 2018 Stellapps</Text>
                            </View>
                        </View>
              </ScrollView>  
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
    textinputBox:
    {
        borderBottomWidth: 2,
        borderBottomColor: '#DCD8D8',
        color: '#000',
        width:180,
        marginLeft:10,
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
   box2:
   {
    marginTop:10
  }
})
