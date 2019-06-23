import AuthScreen from './src/screens/Auth/Auth';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: { screen: AuthScreen}
});

const App = createAppContainer(RootStack);

export default App;
