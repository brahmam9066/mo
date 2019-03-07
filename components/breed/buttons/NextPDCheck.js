import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import BasicSection from '../sectionlist/RecordSectionList/BesicSection';

export default class NextPDCheck extends Component{
    static navigationOptions = {
        title: 'PD Details',
      };
    render(){
        return(
            <View>
                <View style={styles.SectionStyle}>
                        <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = "Search PD"
                                placeholderTextColor = "gray"
                                autoCapitalize = "none"
                                
                            />
                        <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                        <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                </View>
                
                <View style={{backgroundColor:'white',height:'100%',marginBottom:10}}>
                  <Text style={styles.text}>Home/mooON Dashboard/Breed/PD Details</Text>

                        <View style={{flexDirection:'row',paddingBottom:15,backgroundColor:'white',flexWrap:'wrap', borderBottomWidth: 2,marginLeft:20,marginRight:10, borderBottomColor: '#DCD8D8',marginTop:20}}>
                            <BasicSection />
                        </View>

                        <View style={{marginTop:20,paddingBottom:20, marginLeft:10,borderBottomWidth: 2,  borderBottomColor: '#DCD8D8'}}>
                           <View>
                                <Text style={{fontWeight:'bold',color:'black'}}>PD Details-1</Text>
                           </View>

                            <View style={{marginTop:10}}>
                                <Text>AI Done Date: 12 Sep 2018</Text>
                                <Text>PD Check Date: 30 Sep 2018</Text>
                           </View>
                        </View>

                        <View style={{marginTop:20,paddingBottom:20, marginLeft:10}}>
                           <View>
                                <Text style={{fontWeight:'bold',color:'black'}}>PD Details-2</Text>
                           </View>

                            <View style={{marginTop:10}}>
                                <Text>AI Done Date: 12 Sep 2018</Text>
                                <View>
                                    <TextInput  style={styles.textinput}
                                        placeholder='PD Check Date'
                                        autoCapitalize='none'
                                        />
                                        <Icon style={styles.searchIcon} name="calendar" size={20} />
                                </View>

                                 <View>
                                    <TextInput  style={styles.textinput}
                                        placeholder='Service Costs'
                                        autoCapitalize='none'
                                        />
                                </View>
                           </View>
                        </View>
                        <View style={{justifyContent:'center',alignContent:'center',width:350,marginLeft:27,marginTop:5}}>
                            <TouchableOpacity>
                                    <Button 
                                    style={styles.button}
                                            title = "Save"
                                            color = "#0AC0A2"
                                        />
                            </TouchableOpacity>
                       </View>
                
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:8}}>
                            <Text style={styles.footer}>Copyright &copy; 2018 Stellapps</Text>
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
        color: '#000'
    },
    searchIcon: {
        position:'absolute',
        right: 24 ,
        padding:5,
        marginTop:20
   },
   SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
     borderWidth: .5,
    borderColor: 'gray',
    height: 40,
    margin: 20,
    position:'relative',
    backgroundColor:'white'
  },
})
