import React from 'react';
import {Image,TouchableOpacity} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";

import Home from './components/ImgComponent';
import SignUp from './components/SignUp';
import Otp from './components/Otp';
import PasswordPage from './components/PasswordPage';
import Login from './components/Login';
import Loader from  './components/Loader';
import Drawer from './DrawerNavigator';



const Routes = createStackNavigator({
   home : {screen : Home, navigationOptions: { header:null}},
   signup : {screen : SignUp,            
         navigationOptions: {
            title: "Product Logo",
            headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
            headerStyle: {
            backgroundColor: "#212121"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
            fontWeight: "bold"
            }
   }},
   otp : {screen : Otp,
      navigationOptions: {
         title: "Product Logo",
         headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   passwordPage : {screen : PasswordPage,
      navigationOptions: {
         title: "Product Logo",
         headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   login : {screen :Login,
      navigationOptions: {
         title: "Product Logo",
         headerLeft : (<Image source = {require('./images/img3.jpg')}/>),
         headerStyle: {
         backgroundColor: "#212121"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
         fontWeight: "bold"
         }
   }},
   drawerStack : {screen : Drawer , navigationOptions:({navigation}) => ({
     header : null
  })},
   loader : {screen : Loader,navigationOptions: { header:null}}
},{
   initialRouteName: "home"
});
export default Routes;
