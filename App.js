import React from 'react';
import { Provider } from 'react-redux';

import AppDemo from './AppDemo';
import configureStore from "./src/store/configureStore";

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppDemo />
      </Provider>
    );
  }
} 

export default App;
