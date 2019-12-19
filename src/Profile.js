import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { 
    Input,
    Button,
    Header,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import pages from './pages';

  class Profile extends React.Component{
    emailIcon = () => <Icon
        name='envelope'
        size={20}
        color='black'
    />;
    passIcon = () => <Icon
        name='lock'
        size={25}
        color='black'

    />;

      render(){
          return(
            <>
            <Header
            backgroundColor='white'
                      leftComponent={{ text: 'iFamuzza', fontSize:100}}
                      //centerComponent={{ }}
                      rightComponent={{ text: 'accedi', fontSize:100 }}
                      /*containerStyle={{
                        justifyContent: 'space-around',
                      }}*/
            />   
            <View style ={styles.container}>
                <View>
                    <Text style ={{fontSize: 30,textAlign: 'center'}}>
                        Registrati su iFamuzza
                    </Text>
                </View>
                <Input
                  placeholder = 'Enter your email'
                  leftIcon={this.emailIcon}
                />
                <Input
                  placeholder = 'Enter your password'
                  secureTextEntry
                  leftIcon={this.passIcon}
                />
                <Input
                  placeholder ='Confirm your password'
                  secureTextEntry
                  leftIcon={this.passIcon}
                />
                <View style = {{borderRadius: 70,
                                padding: 70}}>
                <Button
                  title="Crea un account"
                  type="solid"
                />
                </View>
                <Text>Sei già registrato su iFamuzza? Accedi</Text>
            </View>
            </>
          );
      }
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        padding: 50
    },
   
    text: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18 
    },
    text2: {
        
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        

    }
  
  })

export default Profile;
