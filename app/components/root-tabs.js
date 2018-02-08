import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-pro-solid/faSearch';
import { Dimensions, Text, View } from 'react-native';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import DetailsScreen from './details/details';
import SearchScreen from './search/search-container';
import SettingsScreen from './settings/settings';
import Style from './root-tabs-style';

fontawesome.library.add(faSearch);

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
  { key: 'search', icon: 'search', title: 'Search' },
  { key: 'details', icon: 'search', title: 'Details' },
  { key: 'settings', icon: 'search', title: 'Settings' },
];

export default class TabViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes,
    };
  }
  handleIndexChange = (index) => {
    this.setState({ index });
  }
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
      style={Style.tabbar}
    />
  )
  renderIcon = ({ route }) => (
    <FontAwesomeIcon icon={route.icon} />
  );
  render() {
    return (
      <TabViewAnimated
        initialLayout={initialLayout}
        navigationState={{
          index: this.state.index,
          routes: this.state.routes,
        }}
        onIndexChange={this.handleIndexChange}
        renderScene={SceneMap(scene)}
        renderFooter={this.renderFooter}
        style={Style.container}
      />
    );
  }
}
