import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, TextInput, Picker} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import { withNavigation } from 'react-navigation';

class DeworningProfile extends React.Component {
    static navigationOptions = {
        title: 'Deworning Profile',
    };

    constructor(props){
        super(props)
        this.state = {date:"", symptoms: "", doneBy: "", diagnosis: ""}
      }

      onPressButton(){
          alert("clicked")
      }
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');
      return (
        <ScrollView style = {styles.container}>
            <Text style = {styles.headline}>Home / Health / Deworning</Text>
            {/* <Text style = {styles.headlineBold}>Physical Inspection</Text> */}
            <View style={styles.textContainer1}>
                <TextInput style={styles.textInput3}/>
                <Icon name="qrcode" size={20} style={styles.qrIcon}/>
            </View>
            <Text style = {styles.text1}>Date</Text>
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
            <View style={styles.textContainer1}>
                <View style={{width: 205}}>
                    <Text style = {styles.text2}>Symptoms</Text>
                    <Picker
                        selectedValue={this.state.symptoms}
                        style={styles.picker}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => this.setState({symptoms: itemValue})}>
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{width: 205}}>
                    <Text style = {styles.text2}>Done By</Text>
                    <Picker
                        selectedValue={this.state.doneBy}
                        style={styles.picker}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => this.setState({doneBy: itemValue})}>
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>
            <Text style = {styles.text2}>Diagnosis</Text>
            <Picker
                selectedValue={this.state.diagnosis}
                style={styles.picker}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => this.setState({diagnosis: itemValue})}>
                <Picker.Item label="Select" value="select" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Text style = {styles.text1}>Date</Text>
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
            <Text style = {styles.text2}>Heart Rate/min</Text>
            <TextInput style={styles.textInput1}/>
            
            <Text style = {styles.headlineBold1}>Clinical Findings</Text>
            <Text style = {styles.text2}>Diagnosis</Text>
            <Picker
                selectedValue={this.state.diagnosis}
                style={styles.picker}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => this.setState({diagnosis: itemValue})}>
                <Picker.Item label="Select" value="select" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <View style={styles.textContainer1}>
                <View style={{width: 205}}>
                    <Text style = {styles.text2}>Symptoms</Text>
                    <Picker
                        selectedValue={this.state.symptoms}
                        style={styles.picker}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => this.setState({symptoms: itemValue})}>
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{width: 205}}>
                    <Text style = {styles.text2}>Done By</Text>
                    <Picker
                        selectedValue={this.state.doneBy}
                        style={styles.picker}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => this.setState({doneBy: itemValue})}>
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>
            <View style={styles.boxs}>
                <View style={styles.box}>
                    <Text>Ampicillin</Text>
                    <Icon name="times" size={10} style={styles.close}/>
                </View>
                <View style={styles.box}>
                    <Text>Ketoconazole</Text>
                    <Icon name="times" size={10} style={styles.close}/>
                </View>
                <View style={styles.box}>
                    <Text>Fenbendazole</Text>
                    <Icon name="times" size={10} style={styles.close}/>
                </View>
                <View style={styles.box}>
                    <Text>Ceftriaxone</Text>
                    <Icon name="times" size={10} style={styles.close}/>
                </View>
            </View>
            <TouchableOpacity style={styles.buttons1} onPress={this.onPressButton}>
                <Text style={{color: "#009688", fontSize:15}}>Add More</Text>
            </TouchableOpacity>
            <View style={styles.buttons}>
                <Button
                    onPress = {() => this.props.navigation.navigate('DeworningDetails', {item})}
                    title="Save"
                    color="#009688"
                    />
            </View>
            
            <View style = {styles.copyrights}>
                <Text style={{fontSize:12, color: "grey"}}>Copyright {'\u00A9'} 2018 Stellapps</Text>
            </View>
        </ScrollView>
            
      );
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff"
    },
    headline: {
        padding: 20,
        color: "grey"
    },
    headlineBold: {
        paddingTop: 15,
        padding: 20,
        fontSize: 15,
        fontWeight: "bold",
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
    textContainer1: {
        flexDirection: "row",
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
    headlineBold1: {
        paddingTop: 30,
        padding: 20,
        fontSize: 15,
        fontWeight: "bold",
    },
    textareaContainer:{
        flexDirection: "row"
    },  
    textarea: {
        width: 315,
        height: 80,
        justifyContent: "flex-start",
        borderColor: "grey",
        borderWidth: 0.8,
        marginLeft: 20,
        marginRight: 20,
        marginTop:10
    },
    text3: {
        paddingTop: 0,
        paddingLeft: 20,
        color: "grey"
    },
    videoIcon: {
        width: 40,
        height:40,
        marginTop:15,
        borderColor: "grey",
        borderWidth: 0.8,
        borderRadius: 50,
        paddingTop:10,
        paddingLeft:10
    },
    textarea1: {
        width: 375,
        height: 80,
        justifyContent: "flex-start",
        borderColor: "grey",
        borderWidth: 0.8,
        marginLeft: 20,
        marginRight: 20,
        marginTop:10
    },
    picker: {
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 0.8,
        marginLeft: 20,
        marginRight: 20,
    },
    textInput2: {
        width:330,
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 0.8,
        marginLeft: 20,
        marginRight: 20,
    },
    textInput3: {
        width:330,
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 0.8,
        marginLeft: 20,
    },
    qrIcon: {
        width: 40,
        height:40,
        borderBottomColor: "grey",
        borderBottomWidth: 0.8,
        paddingTop:10,
        paddingLeft:10
    },
    buttons: {
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        marginBottom:30
    },
    buttons1: {
        backgroundColor: "#ffffff",
        borderColor: "grey",
        borderWidth: 1,
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        justifyContent:'center',
        alignItems: 'center',
        padding:10
    },
    copyrights: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop:5,
        paddingBottom:30,
        backgroundColor: "#ffffff"
    },
    boxs: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        flexWrap: 'wrap'
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "grey",
        borderWidth: 0.8,
        width:165,
        height: 40,
        margin:10,
        padding:10
    }


})

export default withNavigation(DeworningProfile);