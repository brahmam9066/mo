import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import BasicSection from './sectionlist/RecordSectionList/BesicSection';

export default class RecordPD extends Component{
    static navigationOptions = {
        title: 'Record PD',
      };
    render(){
        return(
            <View style={{backgroundColor:'white',height:'100%'}}>
              <Text style={styles.text}>Home/mooON Dashboard/Breed/Record PD</Text>

                <View style={{flexDirection:'row',backgroundColor:'white',flexWrap:'wrap', borderBottomWidth: 2,marginLeft:20,marginRight:10, borderBottomColor: '#DCD8D8',marginTop:20}}>
                    <BasicSection />
                </View>

                <View style={{marginTop:20,marginLeft:10}}>
                    <Text>AI Done Date: 12 Sep 2018</Text>
                </View>

                <View style={styles.list}>
                        <View>
                            <TextInput  style={styles.textinput}
                                placeholder='PD Check Date'
                                autoCapitalize='none'
                                />
                                <Icon style={styles.searchIcon} name="calendar" size={20} />
                        </View>

                        <View>
                            <TextInput  style={styles.textinput}
                            placeholder='Done By'
                            autoCapitalize='none'
                            />
                            <Icon style={styles.searchIcon} name="search" size={20} />
                        
                        </View>

                        <View>
                            <TextInput  style={styles.textinput}
                            placeholder='PD Result'
                            autoCapitalize='none'
                            />
                            <Icon style={styles.searchIcon} name="caret-down" size={20}/>
                        </View>

                            <TextInput  style={styles.textinput}
                            placeholder='Service Cost'
                            autoCapitalize='none'
                            />
                       <View style={{justifyContent:'center',alignContent:'center',width:350,marginLeft:27,marginTop:20}}>
                       <TouchableOpacity>
                            <Button 
                              onPress={ () => this.props.navigation.navigate('Home7') }
                              style={styles.button}
                                    title = "Save"
                                    color = "#0AC0A2"
                                />
                        </TouchableOpacity>
                       </View>

                        <View style={{justifyContent:'center',alignContent:'center',width:350,marginLeft:27,marginTop:20}}>
                            <Button 
                                    onPress={ () => this.props.navigation.navigate('SaveandPerform') }
                                    title = "Save & Perform AI"
                                    color = "#DCD8D8"
                                />
                                
                         </View>

                        <View style={{justifyContent:'center',width:350,marginLeft:27,marginTop:20,alignItems:'center',borderWidth:1,
                                  borderColor: 'gray',height:40}}>
                           <Text>Cancel</Text>
                        </View>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                   <Text style={styles.footer}>Copyright &copy; 2018 Stellapps</Text>
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

})
