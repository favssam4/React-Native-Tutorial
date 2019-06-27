import React from 'react';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const RootStack = createStackNavigator({
  Home: { screen: AuthScreen }
});

const TabNavigator = createBottomTabNavigator(
  {
    FindPlace: { screen: FindPlaceScreen, title: "FindPlace" },
    SharePlace: { screen: SharePlaceScreen, title: "SharePlace" }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintcolor}) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName == 'FindPlace')
        {
          iconName = 'md-search';
        }
        else if (routeName == 'SharePlace')
        {
          iconName = 'md-share-alt';
        }

        return <IconComponent name={iconName} size={25} color={tintcolor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);
const App = createAppContainer(TabNavigator);

export default App;
