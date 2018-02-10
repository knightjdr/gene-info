import { StyleSheet } from 'react-native';

import Theme from './style/theme';

const Styles = StyleSheet.create({
  badge: {
    marginTop: 5,
    marginRight: '30%',
    backgroundColor: Theme.accent.light,
    height: 18,
    width: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  container: {
    flex: 1,
  },
  count: {
    color: Theme.text.dark,
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: -2,
  },
  icon: {
    backgroundColor: 'transparent',
    color: Theme.text.light,
  },
  indicator: {
    backgroundColor: Theme.primary.light,
  },
  tabbar: {
    backgroundColor: Theme.primary.dark,
  },
});
export default Styles;
