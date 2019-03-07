import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class RecordAI extends Component{
    static navigationOptions = {
        title: 'Record AI',
      };
    render(){
        return(
            <View>
                <Text style={styles.text}>Home/mooON Dashboard/Breed/Record AI</Text>
                <View style={styles.list}>
                    <TextInput  style={styles.textinput}
                    placeholder='Last Calving Data'
                    autoCapitalize='none'
                    />

                    <TextInput  style={styles.textinput}
                    placeholder='NO Of AI'
                    autoCapitalize='none'
                    />

                  <TextInput  style={styles.textinput}
                  placeholder='Last Heat Date'
                  autoCapitalize='none'
                   />
                <View>
                    <TextInput  style={styles.textinput}
                    placeholder='Select Service Type'
                    autoCapitalize='none'
                    />
                    <Icon style={styles.searchIcon} name="caret-down" size={20}/>
                </View>

                 <View>
                    <TextInput  style={styles.textinput}
                    placeholder='Select Sire Ear Tag No'
                    autoCapitalize='none'
                    />
                    <Icon style={styles.searchIcon} name="search" size={20} />
                   
                </View>

                 <View>
                    <TextInput  style={styles.textinput}
                    placeholder='Done By'
                    autoCapitalize='none'
                    />
                    <Icon style={styles.searchIcon} name="caret-down" size={20} />
                </View>
                 

                 <TextInput  style={styles.textinput}
                  placeholder='Semen ID'
                  autoCapitalize='none'
                   />

                 <TextInput  style={styles.textinput}
                  placeholder='Treatment Cost Amount'
                  autoCapitalize='none'
                   />
                <View>
                  <TextInput  style={styles.textinput}
                    placeholder='Next Review Date'
                    autoCapitalize='none'
                    />
                     <Icon style={styles.searchIcon} name="calendar" size={20} />
                </View>
                   
               <View style={{justifyContent:'center',alignContent:'center',width:350,marginLeft:27,marginTop:20}}>
               <Button style={styles.button}
                    title = "Save"
                    color = "#0AC0A2"
                />
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

})
