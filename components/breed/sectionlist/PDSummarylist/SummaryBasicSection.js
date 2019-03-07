import React,{Component} from 'react';
import {View,Text,SectionList,Image} from 'react-native';
import {SectionData} from './PDSection';
import Icon from "react-native-vector-icons/EvilIcons";

class SectionListItem extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',flexWrap:'wrap', borderBottomWidth: 2,marginLeft:20,marginRight:10, borderBottomColor: '#DCD8D8',}}>
                <View>
                    <Image source = {require('../../asserts/icon.png')} style={{width:80,height:80}}/>
                </View>
               
               <View>
                    <Text style={{fontSize:16, fontWeight:'bold', color: 'black', marginLeft:20, marginRight:10}}>
                        {this.props.item.name}
                    </Text>
                    <Text style={{fontSize:16, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                        {this.props.item.description}
                    </Text>
                    <Text style={{fontSize:16, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                        {this.props.item.type}
                    </Text>
               </View>
               <View style={{ position:'absolute',alignItems:'flex-end',right: 15 ,  marginTop:10}}>
                  <Icon  name="chevron-right" size={40} color="#000"/>
               </View>
            </View>
        )
    }
}

export default class BasicSectionData extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SectionList   
                  renderItem={({item, index}) =>{
                    return(
                        <SectionListItem item={item} index={index}>
                        
                        </SectionListItem>
                    );
                  }}
                  sections={SectionData}
                  keyExtractor={(item, index) => item.name}
                 >

                </SectionList>
            </View>
        )
    }
}