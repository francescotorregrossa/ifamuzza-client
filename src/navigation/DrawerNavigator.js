import React from 'react';
import{Platform, Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator, StackActions, NavigationOpenDrawerAction} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AppNavigator from './AppNavigator';

const Width = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: Width*0.65,
}

const DrawerNavigator = createDrawerNavigator ({

    HomePage: {
        screen: HomeScreen
    },
    
},
    DrawerConfig,
);

const MainNavigation = createSwitchNavigator({
    HomeDrawer: DrawerNavigator,
    AuthStack: AppNavigator,
    
});

export default createAppContainer(MainNavigation);