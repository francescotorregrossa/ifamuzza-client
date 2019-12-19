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
  emailIcon = () => <Icon name="envelope" size={20} color="black" />;

  passIcon = () => <Icon name="lock" size={25} color="black" />;

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Your Email Address</Text>
        </View>
        <Input placeholder="  email@address.com" leftIcon={this.emailIcon} />
        <View>
          <Text style={styles.text2}>Password</Text>
          <Input
            placeholder="  password"
            leftIcon={this.passIcon}
            secureTextEntry
          />
        </View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          type="outline"
          icon={<Icon name="arrow-circle-left" color="black" size={25} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },

  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text2: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Login;
