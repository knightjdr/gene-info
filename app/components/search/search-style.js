import { StyleSheet } from 'react-native';

import Theme from '../style/theme';

const Styles = StyleSheet.create({
  infoText: {
    fontFamily: 'Kalam-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  gradientContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  mainView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  searchContainer: {
    backgroundColor: Theme.primary.dark,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginLeft: '0%',
    paddingBottom: 3,
    paddingTop: 3,
    width: '100%',
  },
  searchInput: {
    backgroundColor: Theme.white.off,
    color: Theme.text.dark,
  },
});
export default Styles;
