import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View } from 'react-native';

const Search = ({ onChangeText, onClearText, submitSearch }) => (
  <LinearGradient
    colors={['#FFFFFF', '#CFD8DC']}
    start={{ x: 0.1, y: 0.1 }}
    style={{
      flex: 1,
      flexDirection: 'column',
    }}
  >
    <SearchBar
      clearIcon={{ name: 'clear' }}
      containerStyle={{
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
      }}
      inputStyle={{
        backgroundColor: '#546E7A',
        color: '#F5F5F5',
      }}
      onChangeText={onChangeText}
      onClearText={onClearText}
      onSubmitEditing={submitSearch}
      placeholder="Search..."
    />
    <View style={{
        flex: 1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Text>
        Search Screen
      </Text>
    </View>
  </LinearGradient>
);

Search.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onClearText: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

export default Search;
