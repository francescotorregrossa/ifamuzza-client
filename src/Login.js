import React from 'react';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  button,
} from 'react-native';

import NavigationComponent from './NavigationComponent';
import pages from './pages';

class Login extends NavigationComponent {

  render() {
    return this.shouldRender() ? (
      <View style={styles.container}>
          <View style= {styles.input}>
          <Input 
          placeholder="  email@address.com" 
          label = " Email" 
          labelStyle = {{
             color: 'black',
             fontSize: 20,
          }}
          leftIcon={{
            type:'font-awesome',
            name: 'envelope',
            color: 'gray',
            containerStyle: {marginRight: 16},
        }}
           />             
          </View>
          <View style= {styles.input}>
          <Input 
          placeholder="  password" 
           label = " Password" 
           secureTextEntry
           labelStyle = {{
              color: 'black',
              fontSize: 20,
          }}
          leftIcon={{
            type:'font-awesome',
            name: 'lock',
            color: 'gray',
            size: 30,
            containerStyle: {marginRight: 16},  
         }}
        />
        </View>
        <View style= {styles.input}>
        <Button 
                style={styles.button1}
                onPress={() => this.requestPage(pages.home)}
                type="outline"
                title= "ACCEDI"
          />           
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    padding:20 ,
  },
    input:{
        marginTop: 30
    }

});
export default Login;
