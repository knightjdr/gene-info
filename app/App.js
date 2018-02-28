import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import RootTabs from './components/root-tabs-container';
import { persistor, store } from './state/store';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootTabs />
        </PersistGate>
      </Provider>
    );
  }
}
