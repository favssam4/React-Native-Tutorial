import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: { screen: AuthScreen }
});

const TabNavigator = createBottomTabNavigator({
  FindPlace: { screen: FindPlaceScreen, title: "FindPlace" },
  SharePlace: { screen: SharePlaceScreen, title: "SharePlace" }
});
const App = createAppContainer(TabNavigator);

export default App;
