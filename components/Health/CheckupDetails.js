import React from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image, ScrollView} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class CheckupHistory extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     const item = navigation.getParam('item');
    //     return{
    //       headerTitle: item ? item.registerationId : 'Notifications',
    //     } 
    //   };

      static navigationOptions = ({ navigation }) => ({
        title: "Profile",
        headerTintColor: "#fff",
        headerStyle: {
        backgroundColor: "#1F1816"
        },
        // headerLeft: (
        // <TouchableOpacity
        //     style={Styles.headerButton}
        //     onPress={() => navigation.openDrawer()}
        // >
        //     <Icon name="arrow-left" size={20} color="#fff" />
        // </TouchableOpacity>
        // )
    });

    _onSearch = () => {
        alert("salai");
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');
      return (
        <View style = {styles.container}>
            <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}
                onClearText={this._onSearch.bind(this)}
                icon={{ type: 'font-awesome', name: 'search', justifyContent:'center'  }}
                inputStyle={{backgroundColor: 'white'}}
                containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, margin:15, borderColor: "grey"}}
                placeholder='Search Cattle' />
            <ScrollView>
                <View style = {styles.container1}>
                    <View style={styles.headlineContainer}>
                        <Text style = {styles.headline}>Home / Health / Observation</Text>
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
                </View>
                <View style={styles.details}>
                    <View style={styles.details1}>
                        <Text style={{flex:1,fontWeight: "bold"}}>Observation</Text>
                        <Text onPress = {() => this.props.navigation.navigate('RecordObservation', {item})}>Edit</Text>
                    </View>
                    <View style={styles.details2}>
                        <Text>Recorded Date : {item.recordedDate}</Text>
                        <Text>Next</Text>
                    </View>
                    <Text style={styles.details3}>Next review : {item.nextReview}</Text>
                    <View style={styles.details1}>
                        <Text style={{flex:1,fontWeight: "bold"}}>Physical Inspection</Text>
                    </View>
                    <View style={styles.details4}>
                        <Text>Heart Rate : {item.heartRate}</Text>
                        <Text style={{marginLeft: 70}}>Weight : {item.weight}</Text>
                    </View>
                    <View style={styles.details4}>
                        <Text>Pulses : {item.pulses}</Text>
                        <Text style={{marginLeft: 95}}>Temperature : {item.temperature}</Text>
                    </View>
                    <View style={styles.details4}>
                        <Text>Rumination Rate : {item.ruminationRate}</Text>
                        <Text style={{marginLeft: 15}}>Respiration : {item.respiration}</Text>
                    </View>
                    <Text style={styles.details4}>Treatments : {item.treatments}</Text>
                    <Text style={styles.details5}>Lab Test records : {item.labTestRecords}</Text>
                    <View style={styles.details1}>
                        <Text style={{flex:1,fontWeight: "bold"}}>Clinical Findings</Text>
                    </View>
                    <Text style={styles.details4}>Problems Found : {item.problemsFound}</Text>
                    <View style={styles.details4}>
                        <Text>Symptoms : {item.symptoms}</Text>
                        <Text style={{marginLeft: 70}}>Diagnosis : {item.diagnosis}</Text>
                    </View>
                    <Text style={styles.details4}>Done By : {item.doneBy}</Text>
                </View>
                <View style = {styles.copyrights}>
                    <Text style={{fontSize:12, color: "grey"}}>Copyright {'\u00A9'} 2018 Stellapps</Text>
                </View>
            </ScrollView>
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
    details:{
        marginTop:15,
        backgroundColor: "#ffffff",
    },
    details1:{
        marginTop:25,
        paddingLeft:25,
        paddingRight:25,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    details2:{
        paddingTop:10,
        paddingLeft:25,
        paddingRight:25,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    details3:{
        paddingTop:10,
        paddingBottom:25,
        paddingLeft:25,
        paddingRight:25,
        borderBottomWidth: 0.5, 
        borderBottomColor: "#9b9d9f",
    },
    details4:{
        paddingTop:10,
        paddingLeft:25,
        paddingRight:25,
        flexDirection: "row",
    },
    details5:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:25,
        paddingRight:25,
    },
    copyrights: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop:15,
        paddingBottom:30,
        backgroundColor: "#ffffff"
    },
})

export default withNavigation(CheckupHistory);