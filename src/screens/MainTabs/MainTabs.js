import React from 'react';
import FindPlaceScreen from '../FindPlace/FindPlace';
import SharePlaceScreen from '../SharePlace/SharePlace';
import PlaceDetail from '../PlaceDetail/PlaceDetail';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

const store = configureStore();

const FindPlaceStack = createStackNavigator(
  {
    FindPlace : FindPlaceScreen,
    PlaceDetail: PlaceDetail
  }
);

FindPlaceStack.navigationOptions = {
  tabBarIcon: <Ionicons name="md-search" size={25} />,
  tabBarLabel: "Find Place"
};

const TabNavigator = createBottomTabNavigator(
    {
      FindPlace: FindPlaceStack,
      SharePlace: { screen: createStackNavigator({SharePlaceScreen}),
                    navigationOptions: {
                      tabBarIcon: <Ionicons name="md-share-alt" size={25} />,
                      tabBarLabel: 'Share Place'
                    }
                  }
    }
);

const AppContainer = createAppContainer(TabNavigator);

class TabNavigation extends React.Component{
    render() {
      return (
        <Provider store={store} >
          <AppContainer />
        </Provider>
      )
    }
};

export default TabNavigation;