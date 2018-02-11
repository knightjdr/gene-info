import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View } from 'react-native';

const Search = ({
  hasSearchResult,
  onChangeText,
  onClearText,
  searchTerm,
  submitSearch,
}) => (
  <LinearGradient
    colors={['#FFFFFF', '#CFD8DC']}
    start={{ x: 0.1, y: 0.1 }}
    style={{
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'column',
    }}
  >
    <SearchBar
      clearIcon={{ name: 'clear' }}
      containerStyle={{
        backgroundColor: '#455A64',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: '0%',
        width: '100%',
      }}
      inputStyle={{
        backgroundColor: '#F5F5F5',
        color: '#263238',
      }}
      onChangeText={onChangeText}
      onClearText={onClearText}
      onSubmitEditing={submitSearch}
      placeholder="Gene symbol..."
      value={searchTerm}
    />
    {
      hasSearchResult &&
      <View
        style={{
          flex: 1,
          height: '100%',
          justifyContent: 'center',
          paddingLeft: '10%',
          paddingRight: '10%',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          Search for genes by official symbol or synonym using the input
          above
        </Text>
      </View>
    }
  </LinearGradient>
);

Search.defaultProps = {
  searchTerm: null,
};

Search.propTypes = {
  hasSearchResult: PropTypes.bool.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onClearText: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  submitSearch: PropTypes.func.isRequired,
};

export default Search;
