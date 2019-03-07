import React from 'react';
import {Image,TouchableOpacity,Text,Alert} from 'react-native';
import { createDrawerNavigator ,DrawerItems,createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";
import {Container,Content,Header,Body,List} from 'native-base';

import Home from './components/HomePage';
import Profile from './components/Profile';
import FarmAdministration from './components/FarmAdmin';
import Offline from './components/Offline';
import LanguagePrefer from './components/LangPref';
import ChangePassword from './components/ChangePsw';
import SignOut from './components/AlertBox';
import TabViewExample from "../TabView";



const CustomDrawerContentComponent=(props)=>(
    <Container>
      <Header style={{height:150,backgroundColor:'#616161'}}>
        <Body>
           <Image source={require('./images/logo.jpg')} />
           <Text style={{color : 'white', fontSize: 20}}>User Name</Text>
        </Body>
      </Header>
      <Content>
       <List>
        <DrawerItems {...props} activeBackgroundColor='rgba(0, 0, 0, .04)'/>
       </List>
      </Content>
    </Container>
  )

  const ProfileStack = createStackNavigator(
    {
      Profile: {
        screen: Profile,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'Profile Details',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const FarmAdminStack = createStackNavigator(
    {
      FarmAdministration: {
        screen: FarmAdministration,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'Farm Administration',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const OfflineStack = createStackNavigator(
    {
      Offline: {
        screen: Offline,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'Offline',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const LangStack = createStackNavigator(
    {
      LanguagePrefer: {
        screen: LanguagePrefer,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'Language Preference',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const ChangePasswordStack = createStackNavigator(
    {
      ChangePassword: {
        screen: ChangePassword,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'Change Password',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const SignOutStack = createStackNavigator(
    {
      SignOut: {
        screen: SignOut,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'SignOut',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const HomeStack = createStackNavigator(
    {
      Home: {
        screen: TabViewExample,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
      headerLeft:<TouchableOpacity onPress={() => navigation.openDrawer()}><Icon name="bars" style={{color:'white',marginLeft:20}} size={20}/></TouchableOpacity>,
      headerStyle: {
      backgroundColor: "#212121"
      },
      headerTitle : 'Welcome',
      headerTintColor: "#fff",
      headerTitleStyle: {
      fontWeight: "bold"
      }
      }),
    }
  );

  const MyDrawerNavigator = createDrawerNavigator({
    profile: {
        screen: ProfileStack,
        navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} color={tintColor}/>
        }
     },
    farmadministration: {
      screen:FarmAdminStack,
        navigationOptions: {
          drawerLabel: 'Farm Administration',
          drawerIcon: ({ tintColor }) => <Icon name="adn" size={17} color={tintColor}/>,
        }
      },
    offline: {
        screen:OfflineStack,
          navigationOptions: {
            drawerLabel: 'Offline',
            drawerIcon: ({ tintColor }) => <Icon name="power-off" size={17} color={tintColor}/>,
          }
        },
      languageprefer: {
          screen:LangStack,
            navigationOptions: {
              drawerLabel: 'LanguagePreference',
              drawerIcon: ({ tintColor }) => <Icon name="globe" size={17} color={tintColor}/>,
            }
          },
      changepassword: {
            screen:ChangePasswordStack,
              navigationOptions: {
                drawerLabel: 'ChangePassword',
                drawerIcon: ({ tintColor }) => <Icon name="unlock-alt" size={17} color={tintColor}/>,
              },
            
            },
      signOut: {
        screen: SignOutStack,
          navigationOptions: {
            drawerLabel: 'Sign Out',
            drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} color={tintColor}/>,
          }
        },
    homepage : {screen : HomeStack }
    },{
    initialRouteName:'homepage',
    drawerPosition:'left',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    drawerWidth : 250
  });

  export default MyDrawerNavigator;