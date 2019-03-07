import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,Picker} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker  from 'react-native-datepicker';
import RadioButton from 'radio-button-react-native';
export default class Milk extends React.Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15",diagnosis: "",value: 0,        
    }
  }
  sampleMethod (value) {
    this.setState({value:value})
   }
   runMethod(){
    if (this.state.value == 1){
      return (
        <View style={styles.box1}>
          <View style={styles.row}>
            <View style={styles.dropdown}>
              <Picker selectedValue={this.state.PickerValue} onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
                <Picker.Item label="Session" value="Session" />
                <Picker.Item label="Morning" value="Morning"/>
              </Picker>
            </View>
            <View style={styles.quantity}>
              <Text style={styles.text}>Quantity</Text>
              <TextInput style={{borderBottomColor: 'grey',borderBottomWidth: 1,margin:10}} value="" keyboardType="numeric">+</TextInput>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dropdown}>
              <Picker selectedValue={this.state.PickerValue} onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
                <Picker.Item label="Session" value="Session" />
                <Picker.Item label="Morning" value="Morning"/>
              </Picker>
            </View>
            <View style={styles.quantity}>
              <Text style={styles.text}>Quantity</Text>
              <TextInput style={{borderBottomColor: 'grey',borderBottomWidth: 1,margin:10}} value="" keyboardType="numeric">+</TextInput>
            </View>
          </View>
          <View style={styles.inputs}>
            <View style={{width:'30%'}}>
              <Text style={styles.text}>Fat(%)</Text>
              <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
            </View>
            <View style={{width:'30%'}}>
              <Text style={styles.text}>SNF(%)</Text>
              <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
            </View>
            <View style={{width:'30%'}}>
              <Text style={styles.text}>SCC(Per ml)</Text>
              <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
            </View>
          </View>
          </View>
    );
    }else if (this.state.value == 2){
      return (
        <View style={styles.box1}>
          <View style={styles.row}>
            <View style={styles.dropdown}>
              <Picker selectedValue={this.state.PickerValue} onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
                <Picker.Item label="Session" value="Session" />
                <Picker.Item label="Morning" value="Morning"/>
              </Picker>
            </View>
            <View style={styles.quantity}>
              <Text style={styles.text}>Quantity</Text>
              <TextInput style={{borderBottomColor: 'grey',borderBottomWidth: 1,margin:10}} value="" keyboardType="numeric">+</TextInput>
            </View>
          </View>
          </View>
        );
  }
  else{
    return (
      <View style={styles.box1}>
      <View style={styles.row}>
        <View style={styles.dropdown}>
          <Picker selectedValue={this.state.PickerValue} onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
            <Picker.Item label="Session" value="Session" />
            <Picker.Item label="Morning" value="Morning"/>
          </Picker>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.text}>Quantity</Text>
          <TextInput style={{borderBottomColor: 'grey',borderBottomWidth: 1,margin:2}} value="" keyboardType="numeric">+</TextInput>
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={{width:'30%'}}>
          <Text style={styles.text}>Fat(%)</Text>
          <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
        </View>
        <View style={{width:'30%'}}>
          <Text style={styles.text}>SNF(%)</Text>
          <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
        </View>
        <View style={{width:'30%'}}>
          <Text style={styles.text}>SCC(Per ml)</Text>
          <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.dropdown}>
          <Picker selectedValue={this.state.PickerValue} onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
            <Picker.Item label="Session" value="Session" />
            <Picker.Item label="Morning" value="Morning"/>
          </Picker>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.text}>Quantity</Text>
          <TextInput style={{borderBottomColor: 'grey',borderBottomWidth: 1,margin:10}} value="" keyboardType="numeric">+</TextInput>
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={{width:'30%'}}>
          <Text style={styles.text}>Fat(%)</Text>
          <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
        </View>
        <View style={{width:'30%'}}>
          <Text style={styles.text}>SNF(%)</Text>
          <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
        </View>
        <View style={{width:'30%'}}>
          <Text style={styles.text}>SCC(Per ml)</Text>
          <TextInput style={styles.input} value="" keyboardType="numeric"></TextInput>
        </View>
      </View>
      </View>

       );
  }
}
  static navigationOptions = ({ navigation }) => ({
    title: "Milk Log",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#1F1816"
    },
  });
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.SectionStyle}>
              <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = "Search Cattle"
                placeholderTextColor = "gray"
                autoCapitalize = "none"
              />
              <View style={{flexDirection: 'row',}}>
                <Icon style={styles.searchIcon} name="search-web" size={30} color="#000"/>
                <Icon style={styles.baricon} name="barcode-scan" size={20} color="#000"/> 
              </View>
            </View>
          </View>
          <View style={styles.box1}>
            <View style={{flexDirection: 'row',justifyContent:'space-between',}}>
              <Text style={{margin:10}}>Home/Nutrition/Milk Log/Milk Log Form</Text>
              <Icon style={styles.searchIcon} name="dots-vertical" size={30} color="#000"/>
            </View>
            <View style={styles.text}>
              <Text style={{fontWeight:'bold',fontSize: 20,}}> Milk Profile</Text>
              <Text style={{fontSize: 15}}> Record Milk data</Text>
            </View>
            <View style={{margin:15}}>
              <Text>Milk Recorded Date</Text>
              <DatePicker style={styles.datePicker} date={this.state.date} mode="date" placeholder="select date" format="DD-MM-YYYY" confirmBtnText="Confirm" cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 5,
                    top: 0,
                     marginRight: 0
                    },
                    dateInput: {
                      alignItems:'flex-start',
                      height:35,
                      borderWidth: 0,
                      borderBottomWidth: 1,
                    }
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
              />
              <View>
                <Picker style={{width:'95%',borderWidth: 1,borderColor: 'grey',}} selectedValue={this.state.PickerValue} onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
                  <Picker.Item label="cattle" value="cattle" />
                  <Picker.Item label="breed" value="breed"/>
                </Picker>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:'white',}}>
            <Text style={styles.text1}>Capture Quality Measurements?</Text>
            <View style={styles.radio}>
              <RadioButton currentValue={this.state.value} value={0} onPress={this.sampleMethod.bind(this)}>
                <Text>Every Session</Text> 
              </RadioButton>  
              <RadioButton currentValue={this.state.value} value={1} onPress={this.sampleMethod.bind(this)}>
                <Text>Agregate</Text>
              </RadioButton>
              <RadioButton currentValue={this.state.value} value={2} onPress={this.sampleMethod.bind(this)}>
                <Text>No</Text>
              </RadioButton>        
            </View>
            <View>
              {this.runMethod()}
            </View>
      </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex:1,
 },
 box:{
   backgroundColor:'#d9d9d9'
 },
 baricon:{
  alignItems:'flex-end',
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:5,
    paddingTop:5,
   borderLeftWidth:1,
   marginTop:10,
   marginBottom:10
  },
  searchIcon: {
    alignItems:'flex-end',
    padding:10
  },
  dots:{
    alignItems:'flex-end',
    padding:10
  },
  SectionStyle: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    margin: 20,
    marginTop:10,
    position:'relative',
    backgroundColor:'white'
  },
  box1:{
    backgroundColor:'white',
  },

  text:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10,
    
  },
  datePicker:{
    width: 400,
    paddingLeft: 5,
    paddingRight: 20,
},

text1:{
  fontWeight: 'bold',
  fontSize: 20,
  justifyContent:'flex-start',
  margin:10
},
radio:{
  flexDirection:'row',
  marginTop: 10
},
row:{
  flexDirection:'row',
  margin: 5
},
dropdown:{
  borderRadius: 1,
  borderWidth: 1,
  borderColor: 'grey',
  width:'50%',
  height: 65,
},
quantity: {
  width:'50%',
  height: 5,
  margin: 5
},
inputs:{
   flexDirection:'row',
   justifyContent:'space-between',
   margin: 5
},
input: {
borderBottomColor: 'grey',
borderBottomWidth: 1,    
},
});