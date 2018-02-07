import { StackNavigator } from 'react-navigation';

import DetailsScreen from './details/details';
import SearchScreen from './search/search';

const RootStack = StackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Search',
  },
);
export default RootStack;
