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

import pages from './pages';

class Login extends React.Component {

  render() {
    return (
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
          onPress={() => this.props.navigation.navigate(pages.home)}
          type="outline"
          title= "LOGIN"
          titleStyle = {{
            fontWeight: 'bold',
            fontSize: 20
          }}
          />           
        </View >
        <View style = {{
          flexDirection: "row"}}> 
         <Text style={{
           marginTop: 25,
           textAlign: 'auto', 
           fontSize: 18}}>
           Aren't you registered yet?
         </Text> 
         <Button 
         onPress={() => this.props.navigation.navigate(pages.profile)}
         type ="clear"
         title= "Sign in" 
         titleStyle = {{
           marginTop: 13,
          fontWeight: 'bold',
          fontSize: 20,
          textDecorationLine: 'underline'
        }}         
         /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    padding:10 ,
  },
    input:{
        marginTop: 25
    },


});
export default Login;
