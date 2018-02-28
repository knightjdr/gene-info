import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import DetailsScreen from './details/details';
import SearchScreen from './search/search-container';
import SettingsScreen from './settings/settings';
import Style from './root-tabs-style';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const scene = {
  details: DetailsScreen,
  search: SearchScreen,
  settings: SettingsScreen,
};

const routes = [
  { key: 'search', icon: 'ios-search' },
  { key: 'details', icon: 'ios-paper' },
  { key: 'settings', icon: 'ios-settings' },
];

export default class TabView extends Component {
  renderBadge = ({ route }) => {
    const badge = (
      <View style={Style.badge}>
        <Text style={Style.count}>2</Text>
      </View>
    );
    return route.key === 'search' ? badge : null;
  };
  renderFooter = props => (
    <TabBar
      {...props}
      indicatorStyle={Style.indicator}
      renderBadge={this.renderBadge}
      renderIcon={this.renderIcon}
      style={Style.tabbar}
    />
  )
  renderIcon = ({ route }) => (
    <Icon name={route.icon} size={24} style={Style.icon} />
  );
  render() {
    return (
      <TabViewAnimated
        animationEnabled={false}
        initialLayout={initialLayout}
        navigationState={{
          index: this.props.tab,
          routes,
        }}
        onIndexChange={this.props.handleIndexChange}
        renderScene={SceneMap(scene)}
        renderFooter={this.renderFooter}
        style={Style.container}
      />
    );
  }
}

TabView.propTypes = {
  handleIndexChange: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
};
