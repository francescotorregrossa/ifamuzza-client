import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import pages from '../pages';

class Signup extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Sign In',
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      allergies: '',
      address: '',
      paymentMethod: '',
      emailMessage: '',
      passwordMessage: '',
      confirmPasswordMessage: '',
      firstNameMessage: '',
      lastNameMessage: '',
      phoneMessage: '',
      allergiesMessage: '',
      addressMessage: '',
      paymentMethodMessage: '',
    };
  }

  updateEmail = text => {
    this.setState({email: text});
  };

  updatePassword = text => {
    this.setState({password: text});
  };

  updateConfirmPassword = text => {
    this.setState({confirmPassword: text});
  };

  updateFirstName = text => {
    this.setState({firstName: text});
  };

  updateLastName = text => {
    this.setState({lastName: text});
  };

  updatePhone = text => {
    this.setState({phone: text});
  };

  updateAllergies = text => {
    this.setState({allergies: text});
  };

  updateAddress = text => {
    this.setState({address: text});
  };

  updatePaymentMethod = text => {
    this.setState({paymentMethod: text});
  };

  signup = () => {
    this.setState({emailMessage: ''});
    this.setState({passwordMessage: ''});
    this.setState({confirmPasswordMessage: ''});
    this.setState({firstNameMessage: ''});
    this.setState({lastNameMessage: ''});
    this.setState({phoneMessage: ''});
    this.setState({allergiesMessage: ''});
    this.setState({addressMessage: ''});
    this.setState({paymentMethodMessage: ''});

    const {email, password} = this.state;
    Auth.instance
      .signup(email, password)
      .then(user => {
        // this.props.navigation.goBack();
        console.log('user', Auth.instance.user, Auth.instance.accessToken);
      })
      .catch(error => {
        console.log('error', error.message);

        /* if (error.message === '') {
          this.setState({emailMessage: 'Enter a valid email'});
        } */
        if (error.message === 'email') {
          this.setState({emailMessage: 'Enter a valid email'});
        }
        if (error.message === 'password') {
          this.setState({passwordMessage: 'Enter a valid password'});
        }
        if (error.message === 'confirmPassword') {
          this.setState({confirmPasswordMessage: 'Enter a valid password'});
        }
        if (error.message === 'firstName') {
          this.setState({
            firstNameMessage: 'This field can only contain letters (Max 20)',
          });
        }
        if (error.message === 'lastName') {
          this.setState({
            lastNameMessage: 'This field can only contain letters (Max 20)',
          });
        }
        if (error.message === 'phone') {
          this.setState({
            phoneMessage: 'This field can only contain numbers (Exactly 10)',
          });
        }
        if (error.message === 'allergies') {
          this.setState({allergiesMessage: ''});
        }
        if (error.message === 'address') {
          this.setState({addressMessage: 'Invalid shipping address'});
        }
        if (error.message === 'paymentMethod') {
          this.setState({paymentMethodMessage: 'Invalid payment method'});
        }
      });
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Input
              placeholder="Enter your email"
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.emailMessage}
              leftIcon={{
                type: 'font-awesome',
                name: 'envelope',
                color: 'gray',
                containerStyle: {marginRight: 16},
              }}
              onChangeText={this.updateEmail}
              value={this.state.email}
            />
            <Input
              placeholder="Enter your password"
              label="Password"
              autoCapitalize="none"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.passwordMessage}
              onChangeText={this.updatePassword}
              value={this.state.password}
              secureTextEntry
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: 'gray',
                size: 30,
                containerStyle: {marginRight: 16},
              }}
            />
            <Input
              placeholder="Confirm your password"
              label="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.confirmPasswordMessage}
              onChangeText={this.updateConfirmPassword}
              value={this.state.confirmPassword}
              secureTextEntry
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: 'gray',
                size: 30,
                containerStyle: {marginRight: 16},
              }}
            />
            <Text style={{padding: 10, fontSize: 20}}> Optional </Text>
            <Input
              placeholder="First name"
              label="First name"
              autoCapitalize="words"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.firstNameMessage}
              onChangeText={this.updateFirstName}
              value={this.state.firstName}
            />
            <Input
              placeholder="Last name"
              label="Last name"
              autoCapitalize="words"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.lastNameMessage}
              onChangeText={this.updateLastName}
              value={this.state.lastName}
            />
            <Input
              placeholder="Phone"
              label="Phone"
              keyboardType="phone-pad"
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.phoneMessage}
              onChangeText={this.updatePhone}
              value={this.state.phone}
            />
            <Input
              placeholder="Allergies"
              label="Allergies"
              autoCapitalize="none"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.allergiesMessage}
              onChangeText={this.updateAllergies}
              value={this.state.allergies}
            />
            <Input
              placeholder="Shipping address"
              label="Shipping address"
              autoCapitalize="words"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
                marginTop: 13,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.addressMessage}
              onChangeText={this.updateAddress}
              value={this.state.address}
            />
            <Input
              placeholder="Payment method"
              label="Payment method"
              autoCapitalize="sentences"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage={this.state.paymentMethodMessage}
              onChangeText={this.updatePaymentMethod}
              value={this.state.paymentMethod}
            />
            <View style={{borderRadius: 70, padding: 10}}>
              <Button
                title="Create account"
                type="solid"
                titleStyle={{
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              />
            </View>
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
    // alignItems: 'center',
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
    paddingTop: 10,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  underline: {
    textDecorationLine: 'underline',
    color: 'blue',
    textAlign: 'center',
  },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
});

export default Signup;
