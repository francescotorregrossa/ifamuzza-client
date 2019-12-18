import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import { 
  Button,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      signIn:false
    }
  }

  isLogged(){
    this.state = {
    signIn: true
    }
  }

  render() {

    if(this.state.signIn){
      return<Login/>
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
            <Button
              style={styles.signbuttonstyle}
              onPress={this.isLogged}
              type='outline'
              icon={
              <Icon 
              name='user'
              color='black'
              size={25}
              />

              }
              />
              <Text style={styles.logostyle}>iFamuzza</Text>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
   container: {
     alignItems: 'center',
     justifyContent: 'center',

   }
   ,

   signbuttonstyle: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'transparent',
    position:'absolute',
    left:170,
    top:75
   }
   ,

   logostyle: {

    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',

   }
});

export default App;

