import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Text} from 'react-native';
import {Button} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import pages from '../pages';
import DrawerContent from './DrawerContent';
import Orders from '../screens/Orders';

const DrawerNav = createDrawerNavigator(
  {
    [pages.home]: {
      screen: HomeScreen,
    },
    [pages.orders]: {
      screen: Orders,
    },
  },
  {
    contentComponent: props => <DrawerContent {...props} />,
  },
);

DrawerNav.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => (
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        iFamuzza
      </Text>
    ),
    headerLeft: () => (
      <Button
        type="clear"
        onPress={() => navigation.toggleDrawer()}
        icon={{name: 'menu', type: 'Ionicons', color: 'black', size: 25}}
      />
    ),
  };
};

const StackNav = createStackNavigator(
  {
    Main: {
      screen: DrawerNav,
    },
    [pages.profile]: {
      screen: Profile,
    },
    [pages.login]: {
      screen: Login,
    },
    [pages.signup]: {
      screen: Signup,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(StackNav);
