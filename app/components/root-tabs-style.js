import { StyleSheet } from 'react-native';

import Theme from './style/theme';

const Styles = StyleSheet.create({
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: Theme.accent.light,
    height: 24,
    width: 24,
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
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
  indicator: {
    backgroundColor: Theme.primary.light,
  },
  tabbar: {
    backgroundColor: Theme.primary.dark,
  },
});
export default Styles;
