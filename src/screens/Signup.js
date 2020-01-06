import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input, Button, ButtonGroup} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import pages from '../pages';
import Auth from '../model/Auth';

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
      emailMessage: '',
      passwordMessage: '',
      confirmPasswordMessage: '',
      firstNameMessage: '',
      lastNameMessage: '',
      phoneMessage: '',
      allergiesMessage: '',
      addressMessage: '',
      paymentMethodMessage: '',
      selectedIndex: 0,
      selectedIndex2: 0,
    };
  }

  updateIndex = selectedIndex => {
    this.setState({selectedIndex});
  };

  updateIndex2 = () => {
    if (this.state.selectedIndex2 === 0) {
      this.setState({selectedIndex2: 1});
    } else {
      this.setState({selectedIndex2: 0});
    }
  };

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

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      phone,
      allergies,
      address,
    } = this.state;

    if (password !== confirmPassword) {
      this.setState({confirmPasswordMessage: 'Enter the same password'});
    }

    Auth.instance
      .signup(
        {
          email,
          firstName,
          lastName,
          phone,
          allergies,
          address,
        },
        password,
      )
      .then(user => {
        this.props.navigation.popToTop();
        console.log('user', Auth.instance.user, Auth.instance.accessToken);
      })
      .catch(error => {
        console.log('error', error.message);

        /* if (error.message === '') {
          this.setState({emailMessage: 'Enter a valid email'});
        } */
        if (error.message.includes('email')) {
          this.setState({emailMessage: 'Enter a valid email'});
        }
        if (error.message.includes('password')) {
          this.setState({passwordMessage: 'Enter a valid password'});
        }
        if (error.message.includes('firstName')) {
          this.setState({
            firstNameMessage: 'This field can only contain letters (Max 20)',
          });
        }
        if (error.message.includes('lastName')) {
          this.setState({
            lastNameMessage: 'This field can only contain letters (Max 20)',
          });
        }
        if (error.message.includes('phone')) {
          this.setState({
            phoneMessage: 'This field can only contain numbers (Exactly 10)',
          });
        }
        if (error.message.includes('allergies')) {
          this.setState({allergiesMessage: ''});
        }
        if (error.message.includes('address')) {
          this.setState({addressMessage: 'Invalid shipping address'});
        }
        if (error.message.includes('paymentMethod')) {
          this.setState({paymentMethodMessage: 'Invalid payment method'});
        }
      });
  };

  render() {
    const buttons = ['Carta di credito', 'Paypal'];
    const button = 'Optional';
    const {selectedIndex} = this.state;
    const {selectedIndex2} = this.state;

    const paymentMethod =
      this.state.selectedIndex === 0 ? (
        <View>
          <Input
            placeholder="Numero di carta"
            label="Numero di carta"
            labelStyle={{
              color: 'black',
              fontSize: 20,

              marginTop: 13,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Input
              containerStyle={{width: '30%'}}
              placeholder="CCV"
              label="CCV"
              labelStyle={{
                color: 'black',
                fontSize: 20,

                marginTop: 13,
              }}
            />
            <Input
              placeholder="Data di scadenza"
              label="Data di scadenza"
              labelStyle={{
                color: 'black',
                fontSize: 20,

                marginTop: 13,
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <Input
            placeholder="Email"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            labelStyle={{
              color: 'black',
              fontSize: 20,

              marginTop: 13,
            }}
          />
          <Input
            placeholder="Password"
            label="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            labelStyle={{
              color: 'black',
              fontSize: 20,

              marginTop: 13,
            }}
          />
        </View>
      );

    const Optional =
      this.state.selectedIndex2 === 0 ? (
        <View />
      ) : (
        <View>
          <Input
            placeholder="First name"
            label="First name"
            autoCapitalize="words"
            autoCorrect={false}
            labelStyle={{
              color: 'black',
              fontSize: 20,

              marginTop: 13,
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

              marginTop: 13,
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

              marginTop: 13,
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

              marginTop: 13,
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

              marginTop: 13,
            }}
            errorStyle={{color: 'red'}}
            errorMessage={this.state.addressMessage}
            onChangeText={this.updateAddress}
            value={this.state.address}
          />
          <Text
            style={{
              padding: 10,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 8,
            }}>
            {' '}
            Payment Method
          </Text>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}}
            textStyle={{
              fontSize: 17,
            }}
          />

          {paymentMethod}
        </View>
      );

    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              placeholder="Enter your email"
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,

                marginTop: 13,
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

                marginTop: 13,
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

                marginTop: 13,
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
            <View style={{flexDirection: 'row'}}>
              <Button
                icon={{
                  type: 'font-awesome',
                  name: 'sort-down',
                  color: 'gray',
                  size: 30,
                  paddingBottom: 10,
                }}
                iconRight
                title="Optional"
                type="clear"
                onPress={this.updateIndex2}
                containerStyle={{
                  marginTop: 15,
                  marginLeft: 5,
                }}
                titleStyle={{
                  textAlign: 'left',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              />
            </View>
            {Optional}

            <View style={{borderRadius: 70, padding: 10, marginTop: 10}}>
              <Button
                title="Create account"
                type="solid"
                onPress={this.signup}
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
