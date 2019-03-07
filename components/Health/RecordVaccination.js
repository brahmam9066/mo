import React from 'react';
import {View, Text, Button, StyleSheet, Picker, Image, ScrollView, TextInput} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';

class RecordVaccination extends React.Component {
    static navigationOptions = {
        title: 'Record Vaccination',
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
            <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}
                onClearText={this._onSearch.bind(this)}
                icon={{ type: 'font-awesome', name: 'search', justifyContent:'center'  }}
                inputStyle={{backgroundColor: 'white'}}
                containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, margin:15, borderColor: "grey"}}
                placeholder='Search Vaccination' />
            {result.map(item => (
            <ScrollView key = {item.id}>
                <View style = {styles.container1}>
                    <View style={styles.headlineContainer}>
                        <Text style = {styles.headline}>Home / Health / Record Vaccination</Text>
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
                <Text style = {styles.text1}>Treatment Date</Text>
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
                 <Text style = {styles.text2}>Diseases</Text>
                <Picker
                    selectedValue={this.state.diagnosis}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({diagnosis: itemValue})}>
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style = {styles.text2}>Vaccination</Text>
                <Picker
                    selectedValue={this.state.diagnosis}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({diagnosis: itemValue})}>
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style = {styles.text2}>Batch #</Text>
                <TextInput style={styles.textInput1}/>
                <Text style = {styles.text2}>Route of Administration</Text>
                <Picker
                    selectedValue={this.state.diagnosis}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({diagnosis: itemValue})}>
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style = {styles.text2}>Dose (ml)</Text>
                <TextInput style={styles.textInput1}/>
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
                <Text style = {styles.text2}>Service Cost</Text>
                <TextInput style={styles.textInput1}/>
                <View style={styles.buttons}>
                    <Button
                        onPress = {() => this.props.navigation.navigate('VaccinationDetails', {item})}
                        title="Save"
                        color="#009688"
                        />
                </View>
                <View style = {styles.copyrights}>
                    <Text style={{fontSize:12, color: "grey"}}>Copyright {'\u00A9'} 2018 Stellapps</Text>
                </View>
            </View>
            </ScrollView>
            ))}
        </View>
            
      );
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f2f2f2"
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
        paddingTop: 20,
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
        justifyContent: "center",
        alignItems: "center",
        paddingTop:5,
        paddingBottom:30,
        backgroundColor: "#ffffff"
    },
})

export default withNavigation(RecordVaccination);