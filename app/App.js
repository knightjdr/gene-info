import { Provider } from 'react-redux';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootTabs from './components/root-tabs';
import store from './state/store';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <RootTabs />
      </Provider>
    );
  }
}
