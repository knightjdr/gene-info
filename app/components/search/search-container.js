import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search';
import { clearSearchTerm, setSearchTerm } from '../../state/set/search-term-action';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchEmpty: false,
      isSearching: false,
      hasSearchResult: false,
      showHelp: true,
    };
  }
  onChangeText = (searchTerm) => {
    this.props.setSearchTerm(searchTerm);
  }
  onClearText = () => {
    this.props.clearSearchTerm();
    this.setState({
      isSearchEmpty: false,
      hasSearchResult: false,
      showHelp: true,
    });
  }
  submitSearch = () => {
    this.setState({
      isSearchEmpty: false,
      isSearching: true,
      hasSearchResult: false,
      showHelp: false,
    });
  }
  render() {
    return (
      <Search
        isSearchEmpty={this.state.isSearchEmpty}
        isSearching={this.state.isSearching}
        hasSearchResult={this.state.hasSearchResult}
        onChangeText={this.onChangeText}
        onClearText={this.onClearText}
        searchTerm={this.props.searchTerm}
        showHelp={this.state.showHelp}
        submitSearch={this.submitSearch}
      />
    );
  }
}

SearchContainer.defaultProps = {
  searchTerm: null,
};

SearchContainer.propTypes = {
  clearSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  clearSearchTerm: () => {
    dispatch(clearSearchTerm());
  },
  setSearchTerm: (term) => {
    dispatch(setSearchTerm(term));
  },
});

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

const Details = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContainer);

export default Details;
