import React,{Component} from 'react';
import {View,Text,SectionList,Image} from 'react-native';
import {Section} from './Section';

class SectionListItem extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',flexWrap:'wrap'}}>
          
               <Image source = {require('../../asserts/icon.png')} style={{width:80,height:80}}/>
               <View>
                    <Text style={{fontSize:16, fontWeight:'bold', color: 'black', marginLeft:20, marginRight:10}}>
                        {this.props.item.name}
                    </Text>
                    <Text style={{fontSize:14, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                        {this.props.item.location}
                    </Text>
                    <Text style={{fontSize:14, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                        {this.props.item.type}
                    </Text>
                    <Text style={{fontSize:14, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                        {this.props.item.Organisation}
                    </Text>
               </View>
              
            </View>
        )
    }
}

export default class BasicSection extends Component{
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
                  sections={Section}
                  keyExtractor={(item, index) => item.name}
                 >

                </SectionList>
            </View>
        )
    }
}