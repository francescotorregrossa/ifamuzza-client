import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import pages from './pages';

const AppNavigator = createStackNavigator(
  {
    [pages.home]: Home,
    [pages.login]: Login,
  },
  {
    initialRouteName: pages.home,
  },
);

export default createAppContainer(AppNavigator);
