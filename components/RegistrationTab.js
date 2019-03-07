import React from 'react';
import {View, Text, Button, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { SearchBar } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';

class RegistrationTab extends React.Component {

    constructor(props) {
        super(props);
        // this.withNavigation = this.withNavigation.bind(this);
      }
    _onSearch = () => {
        alert("salai");
    }

    render() {
      return (
        <ScrollView style = {styles.container}>
            <View style={styles.container1}>
                <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}
                onClearText={this._onSearch.bind(this)}
                icon={{ type: 'font-awesome', name: 'search', justifyContent:'center'  }}
                inputStyle={{backgroundColor: 'white'}}
                containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, margin:15, borderColor: "grey"}}
                placeholder='Search Cattle' />
            <View style = {styles.tabs}>
                <View style = {styles.tab}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Registercattle')}>
                    <Image
                        style={{width: 80, height: 80}}
                        source={require('../images/reg1.png')}
                    />
                    <Text style={styles.headline}>Register Cattle</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.tab}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Registersire')}>
                    <Image
                        style={{width: 80, height: 80}}
                        source={require('../images/reg2.png')}
                    />
                    <Text style={styles.headline}>Register Sire</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.tab}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cattlesummary')}>
                    <Image
                        style={{width: 80, height: 80}}
                        source={require('../images/reg3.png')}
                    />
                    <Text style={styles.headline}>Cattle Summary</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.tab}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Activitylog')}>
                    <Image
                        style={{width: 80, height: 80}}
                        source={require('../images/reg4.png')}
                    />
                    <Text style={styles.headline}>Activity Log</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.swiper}>
                <Swiper>
                    <View style={styles.slides}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slides}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slides}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
             </View>
            </View>

            <View style = {styles.homeContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={require('../images/home.png')}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f2f2f2"
    },
    container1: {
        backgroundColor:'#ffffff',
        marginTop:18,
        borderWidth: 0.5, 
        borderColor: "#9b9d9f"
    },
    headline: {
        color: "#9b9d9f"
    },
    tabs:{
        width: Dimensions.get('window').width,
        height: 240,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tab: {
        width:205,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    search:{
        alignItems: 'flex-end'
    },
    swiper: {
        height:100,
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'white',
        borderWidth: 1, 
        borderRadius: 3, 
        margin:15, 
        borderColor: "#9b9d9f"
    },
    slides: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    text: {
        color: '#9b9d9f',
        fontWeight: 'bold',
      },
    homeContainer: {
        height:60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#ffffff',
        marginTop:20,
        borderWidth: 0.5, 
        borderColor: "#9b9d9f"
    }
})

export default withNavigation(RegistrationTab);