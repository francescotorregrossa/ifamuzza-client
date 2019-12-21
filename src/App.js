import React from 'react';
import {View,ScrollView,Dimensions, SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {ceateDrawerNavigator,DrawerItems} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Login from './Login';
import Profile from './Profile';
import pages from './pages';
import DrawerNavigator from './navigation/DrawerNavigator';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component{

  render(){
    return(
      <>
        <DrawerNavigator/>
      </>
    );

  }


}
