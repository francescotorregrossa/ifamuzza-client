import React from 'react';
import {View,ScrollView,Dimensions, SafeAreaView} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../Login';
import Profile from '../Profile';
import pages from '../pages';
import DrawerNavigator from './DrawerNavigator';




const AppNavigator = createStackNavigator(
  {
    [pages.home]: HomeScreen,
    [pages.login]: Login,
    [pages.profile]: Profile,
  },
  {
    initialRouteName: HomeScreen,
  },
);


export default createAppContainer(AppNavigator);