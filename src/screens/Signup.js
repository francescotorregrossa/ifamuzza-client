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
  constructor(props) {
    super(props);
    this.state = {
      insert: '',
    };
  }

  updateSearch = value => {
    this.setState({
      insert: value,
      insertList: [],
    });
  };

  render() {
    const {insert} = this.state;
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
              errorMessage="Enter a valid email"
              leftIcon={{
                type: 'font-awesome',
                name: 'envelope',
                color: 'gray',
                containerStyle: {marginRight: 16},
              }}
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
              errorMessage="Enter a valid password"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
              errorMessage="The password must be the same as the one in the previous field"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
              placeholder="Name"
              label="Name"
              autoCapitalize="words"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage="This field can only contain letters (Max 20)"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Surname"
              label="Surname"
              autoCapitalize="words"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage="This field can only contain letters (Max 20)"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
              errorMessage="This field can only contain numbers (Exactly 10)"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
              errorMessage=""
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
              errorMessage="Invalid shipping address"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Payment method"
              label="Payment method"
              autoCapitalize="on"
              autoCorrect={false}
              labelStyle={{
                color: 'black',
                fontSize: 20,
                marginLeft: 3,
              }}
              errorStyle={{color: 'red'}}
              errorMessage="Invalid payment method"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
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
