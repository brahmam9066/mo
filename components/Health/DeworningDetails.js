import React from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image, ScrollView} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class DeworningDetails extends React.Component {
    static navigationOptions = {
        title: 'Deworning Details',
    };

    _onSearch = () => {
        alert("salai");
    }

    render() {
        var values = require('../../db/deworningDetails.json');
        const result = values.filter(value => value.id == 1);
      return (
        <View style = {styles.container}>
            <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}
                onClearText={this._onSearch.bind(this)}
                icon={{ type: 'font-awesome', name: 'search', justifyContent:'center'  }}
                inputStyle={{backgroundColor: 'white'}}
                containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, margin:15, borderColor: "grey"}}
                placeholder='Search Deworning Details' />
            {result.map(item => (
            <View key = {item.id}>
                <View style = {styles.container1}>
                    <View style={styles.headlineContainer}>
                        <Text style = {styles.headline}>Home / Health / Deworning Details</Text>
                        {/* <Icon name="ellipsis-v" size={20} style={{margin:20}} onPress = {() => this.props.navigation.navigate('DeworningProfile')}/> */}
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
                        <Text style={{flex:1,fontWeight: "bold"}}>Summary</Text>
                        <Text onPress = {() => this.props.navigation.navigate('DeworningProfile')}>Edit</Text>
                    </View>
                    <Text style={styles.details4}>Date : {item.date}</Text>
                    <View style={styles.details2}>
                        <Text>Next Review Date : {item.nextReview}</Text>
                        <Text>Previous</Text>
                    </View>
                    
                    <View style={styles.details1}>
                        <Text style={{flex:1,fontWeight: "bold"}}>Details</Text>
                    </View>
                    <View style={styles.details4}>
                        <Text>Worm : {item.worm}</Text>
                        <Text style={{marginLeft: 120}}>Dewormer : {item.dewormer}</Text>
                    </View>
                    <View style={styles.details4}>
                        <Text>Done By : {item.doneBy}</Text>
                        <Text style={{marginLeft: 60}}>Service Cost : {item.serviceCost}</Text>
                    </View>
            
                    {/* <View style={styles.details1}>
                        <Text style={{fontWeight: "bold"}}>Clinical Findings</Text>
                    </View>
                    <Text style={styles.details4}>Problems Found : {item.problemsFound}</Text>
                    <View style={styles.details4}>
                        <Text>Symptoms : {item.symptoms}</Text>
                        <Text style={{marginLeft: 70}}>Diagnosis : {item.diagnosis}</Text>
                    </View>
                    <Text style={styles.details4}>Done By : {item.doneBy}</Text> */}
                </View>
                
            </View>
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
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop:15,
        paddingBottom:30,
        backgroundColor: "#ffffff"
    },

})

export default withNavigation(DeworningDetails);