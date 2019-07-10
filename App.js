import React from 'react';
import AuthScreen from './src/screens/Auth/Auth';
import TabNavigation from './src/screens/MainTabs/MainTabs';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator({
  Home: createStackNavigator({ AuthScreen }),
  TabNavigation: TabNavigation
});

const StackContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <StackContainer />
    )
  }
};
