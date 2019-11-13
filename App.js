/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View >
        <Text>Step One</Text>
        <Text >
          Edit <Text >App.js</Text> to change this
          screen and then come back to see your edits.
        </Text>
        <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile',{name: 'faroookstedsdsdsdsdsd'})}
      />
      </View>
  
    );
  }
}
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigation } = this.props;  
    const user_name = navigation.getParam('name', 'NO-User');  
    return (
      
      <View >
        <Text >
          screen and then come back to see your edits.
          
        </Text>
        <Text> 
           User Name: {JSON.stringify(user_name)}
        </Text>
      </View>
  
    );
  }
}
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App1 = createAppContainer(MainNavigator);
export default App1;
