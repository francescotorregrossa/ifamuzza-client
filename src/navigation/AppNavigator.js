import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import pages from '../pages';

const StackNav = createStackNavigator(
  {
    [pages.home]: {
      screen: HomeScreen,
    },
    [pages.login]: {
      screen: Login,
    },
    [pages.signup]: {
      screen: Signup,
    },
  },
  {
    // headerMode: 'screen',
    initialRouteName: pages.home,
  },
);

const DrawerNav = createDrawerNavigator(
  {
    [pages.home]: {
      screen: StackNav,
    },
  },
  {
    // contentComponent: props => <DrawerScreen {...props} />,
  },
);

export default createAppContainer(DrawerNav);
