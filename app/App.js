import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootTabs from './components/root-tabs';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <RootTabs />
    );
  }
}
