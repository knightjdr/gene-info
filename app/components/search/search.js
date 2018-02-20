import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View } from 'react-native';

import Style from './search-style';

const Search = ({
  isSearchEmpty,
  isSearching,
  hasSearchResult,
  onChangeText,
  onClearText,
  searchTerm,
  showHelp,
  submitSearch,
}) => (
  <LinearGradient
    colors={['#FFFFFF', '#ECEFF1']}
    start={{ x: 0, y: 0.3 }}
    style={Style.gradientContainer}
  >
    <SearchBar
      clearIcon={{ name: 'clear' }}
      containerStyle={Style.searchContainer}
      inputStyle={Style.searchInput}
      onChangeText={onChangeText}
      onClearText={onClearText}
      onSubmitEditing={submitSearch}
      placeholder="Gene symbol..."
      value={searchTerm}
    />
    <View
      style={Style.mainView}
    >
      {
        showHelp &&
        <Text
          style={Style.infoText}
        >
          Search for genes by official symbol or synonym using the input
          above
        </Text>
      }
      {
        isSearching &&
        <Text
          style={Style.infoText}
        >
          Search results
        </Text>
      }
      {
        hasSearchResult &&
        <Text
          style={Style.infoText}
        >
          Search results
        </Text>
      }
      {
        isSearchEmpty &&
        <Text
          style={Style.infoText}
        >
          There were no genes matching your search term
        </Text>
      }
    </View>
  </LinearGradient>
);

Search.defaultProps = {
  searchTerm: null,
};

Search.propTypes = {
  isSearchEmpty: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  hasSearchResult: PropTypes.bool.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onClearText: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  showHelp: PropTypes.bool.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

export default Search;
