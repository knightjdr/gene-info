import React, { Component } from 'react';

import Search from './search';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  onChangeText = (searchText) => {
    this.setState({ searchText });
  }
  onClearText = () => {
    this.setState({ searchText: '' });
  }
  submitSearch = () => {
    console.log(this.state.searchText);
  }
  render() {
    return (
      <Search
        onChangeText={this.onChangeText}
        onClearText={this.onClearText}
        submitSearch={this.submitSearch}
      />
    );
  }
}
