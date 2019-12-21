import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import pages from '../pages';

const StackNav = createStackNavigator(
  {
    [pages.home]: HomeScreen,
    [pages.login]: Login,
    [pages.signup]: Signup,
  },
  {
    // headerMode: 'screen',
    initialRouteName: pages.home,
  },
);

const DrawerNav = createDrawerNavigator(
  {
    [pages.home]: StackNav,
  },
  {
    // contentComponent: props => <DrawerScreen {...props} />,
  },
);

export default createAppContainer(DrawerNav);
