import React from 'react';
import {View, Text, Button, StyleSheet, Picker, Image, ScrollView, TextInput} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';

class RecordDehorning extends React.Component {
    static navigationOptions = {
        title: 'Record Dehorning',
    };

    constructor(props){
        super(props)
        this.state = {date:"", symptoms: "", doneBy: "", diagnosis: ""}
      }

    _onSearch = () => {
        alert("salai");
    }

    render() {
        var customData = require('../../db/checkupHistory.json');
        const result = customData.filter(value => value.id == 1);
      return (
        <View style = {styles.container}>
            {result.map(item => (
            <ScrollView key = {item.id}>
                <View style = {styles.container1}>
                    <View style={styles.headlineContainer}>
                        <Text style = {styles.headline}>Home / Health / Record Dehorning</Text>
                        <Icon name="ellipsis-v" size={20} style={{margin:20}}/>
                    </View>
                    <View style={styles.list}>
                        <Image
                            style={styles.listImage}
                            source={require('../../images/profile.png')}
                        />
                        <View style={styles.listLeft}>
                            <Text style={{fontWeight: "bold"}}>Registeration ID : {item.registerationId}</Text>
                            <Text><Text style={{fontWeight: "bold"}}>Lactation : </Text>{item.lactation}</Text>
                            <Text><Text style={{fontWeight: "bold"}}>Breeding : </Text>{item.breed}</Text>
                            <Text><Text style={{fontWeight: "bold"}}>Organisation : </Text>{item.organisation}</Text>
                        </View>
                    </View>
                    <Text style = {styles.text2}>Done By</Text>
                    <Picker
                        selectedValue={this.state.diagnosis}
                        style={styles.picker}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => this.setState({diagnosis: itemValue})}>
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Text style = {styles.text1}>Dehorning Date</Text>
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: 5,
                            top: 0,
                            marginRight: 0
                        },
                        dateInput: {
                            height:35,
                            borderWidth: 0,
                            borderBottomWidth: 1,
                        }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                 
                    <Text style = {styles.text2}>Service Cost</Text>
                    <TextInput style={styles.textInput1}/>
                    <View style={styles.buttons}>
                        <Button
                            onPress = {() => this.props.navigation.navigate('DehorningDetails', {item})}
                            title="Save"
                            color="#009688"
                            />
                    </View>
                </View>
            </ScrollView>
            ))}
            <View style = {styles.copyrights}>
                <Text style={{fontSize:12, color: "grey"}}>Copyright {'\u00A9'} 2018 Stellapps</Text>
            </View>
        </View>
            
      );
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff"
    },
    container1:{
        backgroundColor: "#ffffff"
    },
    headlineContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headline: {
        padding: 20,
        color: "grey"
    },
    list:{
        flexDirection: "row",
        width:375,
        height:115,
        backgroundColor: "#ffffff",
        borderBottomWidth: 0.5, 
        borderBottomColor: "#9b9d9f",
        marginLeft:15
    },
    listImage: {
        width: 65,
        height:65,
        margin: 10,
        marginLeft:0,
        marginRight:25
    },
    listLeft: {
        marginTop: 15
    },
    text1: {
        paddingTop: 10,
        paddingLeft: 20,
        color: "grey"
    },
    datePicker:{
        width: 410,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text2: {
        paddingTop: 15,
        paddingLeft: 20,
        color: "grey"
    },
    textInput1: {
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 0.8,
        marginLeft: 20,
        marginRight: 20,
    },
    picker: {
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 0.8,
        marginLeft: 20,
        marginRight: 20,
    },
    buttons: {
        margin:30
    },
    copyrights: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop:20,
        paddingBottom:20,
        backgroundColor: "#ffffff"
    },
})

export default withNavigation(RecordDehorning);