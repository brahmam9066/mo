import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import RegistrationTab from './RegistrationTab'
import HealthTab from './HealthTab'
import BreedTab from './BreedTab'
import NutritionTab from './NutritionTab'

export default class TabViewExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'registration', title: 'Registration', icon: require('../images/registration.png') },
        { key: 'health', title: 'Health', icon: require('../images/health.png') },
        { key: 'breed', title: 'Breed', icon: require('../images/breed.png') },
        { key: 'nutrition', title: 'Nutrition', icon: require('../images/nutrition.png') },
        { key: 'nutrition', title: 'Nutrition', icon: require('../images/nutrition.png') },

        { key: 'nutrition', title: 'Nutrition', icon: require('../images/nutrition.png') },



      ],
    };
    // this.withNavigation = this.withNavigation.bind(this);
  }

  _handleIndexChange = index => this.setState({ index });

  _renderIcon = ({ route }) => {
    return <Image
        style={{width: 72, height: 53}}
        source={route.icon}
      />;
  };

  _renderTabBar = props => 
    <TabBar
    {...props}
    style={styles.header}
    indicatorStyle={{ backgroundColor: 'black' }}
    labelStyle={{flex:1,color:'grey', fontSize: 9.5}}
    renderIcon={this._renderIcon}
    />

  _renderScene = SceneMap({
    registration: RegistrationTab,
    health: HealthTab,
    breed: BreedTab,
    nutrition: NutritionTab
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.headline}>Home / mooON Dashboard</Text>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
        />
      </View>
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
  header: {
    backgroundColor:'white',
    color: 'grey'
  },
});
