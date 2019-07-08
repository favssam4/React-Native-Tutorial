import React from 'react';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const TabNavigator = createBottomTabNavigator(
  {
    FindPlace: { screen: createStackNavigator({FindPlaceScreen}),
                 navigationOptions: {
                   tabBarIcon: <Ionicons name="md-search" size={25} />,
                   tabBarLabel: 'Find Place'
                 }
               },
    SharePlace: { screen: createStackNavigator({SharePlaceScreen}),
                  navigationOptions: {
                    tabBarIcon: <Ionicons name="md-share-alt" size={25} />,
                    tabBarLabel: 'Share Place'
                  }
                }
  }
);

class TabNavigation extends React.Component{
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    )
  }
};

const RootStack = createSwitchNavigator({
  Home: createStackNavigator({ AuthScreen }),
  TabNavigation
});

const AppContainer = createAppContainer(TabNavigator);
const StackContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <StackContainer />
    )
  }
};
