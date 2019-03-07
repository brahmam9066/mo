import React from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class CheckupHistory extends React.Component {
    static navigationOptions = {
        title: 'Checkup History',
        // headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(TabView)}}/></TouchableOpacity>,
    };

    constructor(props){
        super(props);
        this.state = {values: [], isLoading: true};
      }
    
      componentDidMount() {
        fetch('https://gist.githubusercontent.com/Salaidevaganamani/72c0083ffb9a74942793a38691400191/raw/28aef6074ca060ed5ef7d5c7bf3c6dbb5a40a878/checkupHistory.json')
        .then((response) => {
          return response.json();
        })
        .then((myJs) => {
          const values = JSON.parse(JSON.stringify(myJs));
          this.setState({values, isLoading: false});
          }) 
      }
    
      _keyExtractor(p, i){
            return `${p.id}`;
        }
    
      _renderItem = ({item}) => (
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('CheckupDetails', {item})}>
          <View style={styles.list}>
            <Image
                style={styles.listImage}
                source={require('../../images/profile.png')}
            />
            <View style={styles.listLeft}>
                <Text style={{fontWeight: "bold"}}>Registeration ID : {item.registerationId}</Text>
                <Text><Text style={{fontWeight: "bold"}}>Date : </Text>{item.recordedDate}</Text>
            </View>
            <Icon name="chevron-right" size={15} style={styles.icon}/>
          </View>
        </TouchableOpacity>
      );

    _onSearch = () => {
        alert("salai");
    }

    render() {
        const {values, isLoading} = this.state;
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
            <View style = {styles.container1}>
                <View style={styles.headlineContainer}>
                    <Text style = {styles.headline}>Home / Health / Checkup History</Text>
                    <Icon name="ellipsis-v" size={20} style={{margin:20}}/>
                </View>
                {isLoading && <ActivityIndicator size="large" color="green" style={{flex:1,alignItems: "center", justifyContent:"center"}}/>}
                <FlatList 
                data={values}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor} 
                />
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
        flex:1,
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
        height:85,
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
        flex:1,
        marginTop: 15
    },
    icon:{
        marginLeft:70,
        marginTop:30
    }

})

export default withNavigation(CheckupHistory);