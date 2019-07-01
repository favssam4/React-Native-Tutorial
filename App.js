import React from 'react';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const RootStack = createStackNavigator({
  Home: { screen: AuthScreen }
});

const TabNavigator = createBottomTabNavigator(
  {
    FindPlace: { screen: createStackNavigator({ FindPlaceScreen: FindPlaceScreen }),
                 navigationOptions: {
                   tabBarIcon: <Ionicons name="md-search" size={25} />,
                   tabBarLabel: 'Find Place'
                 }
               },
    SharePlace: { screen: createStackNavigator({ SharePlaceScreen: SharePlaceScreen }),
                  navigationOptions: {
                    tabBarIcon: <Ionicons name="md-share-alt" size={25} />,
                    tabBarLabel: 'Share Place'
                  }
                }
  }
);

const App = createAppContainer(TabNavigator);

export default App;
