import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input, Button, Header,} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import pages from './pages';
import Login from './Login';

class Profile extends React.Component {
  emailIcon = () => <Icon name="envelope" size={20} color="black"/>;
  passIcon = () => <Icon name="lock" size={20} color="black" />;

  render() {
    return (
      <>
        
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <View>
            <Text style={{fontSize: 25, textAlign: 'center'}}>
              Register on <Text style={{color:'red', fontWeight:'bold', fontStyle:'italic'}}> iFamuzza </Text>
            </Text>
          </View>
          <Input placeholder="Enter your email" leftIcon={this.emailIcon} />
          <Input
            placeholder="Enter your password"
            secureTextEntry
            leftIcon={this.passIcon}
          />
          <Input
            placeholder="Confirm your password"
            secureTextEntry
            leftIcon={this.passIcon}
          />
            <Text style={{padding: 10, fontSize: 20}}> Optional </Text>
          <Input placeholder="Name" />
          <Input placeholder="Surname" />
          <Input placeholder="Phone" />
          <Input placeholder="Allergies" />
          <Input placeholder="Shipping address" />
          <Input placeholder="Payment method" />
          <View style={{borderRadius: 70, padding: 10}}>
            <Button title="Create account" type="solid" />
          </View>
          <Text style={styles.text2}>Are you already registered on iFamuzza?  <Text style={styles.underline} onPress={() => this.props.navigation.navigate(pages.login)}> Login </Text></Text>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
  },

  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text2: {
    paddingBottom: 20,
    paddingTop:10,
   //fontWeight: 'bold',
   textAlign:'center',
    fontSize: 15,
  },
  underline: {textDecorationLine: 'underline',
              color: 'red',
              textAlign: 'center',
              },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
});

export default Profile;
