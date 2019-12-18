import React from 'react';
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
  ButtonGroup,
  Icon
} from 'react-native-elements';

import Login from './Login'

class App extends React.Component {
  render() {

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Button style={styles.mainbutton}
            icon={
            <Icon 
            name='sign-in-alt' 
            type='fontawesome'
            color='white' />

            }
            
          />

        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
   container: {
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#ecf0f1',
   },
   mainbutton: {
    flex: 1,
    flexDirection: 'row-reverse',
    height: 50,
    width: 50,

   }
});

export default App;

