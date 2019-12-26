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
            <View>
              <Text style={{fontSize: 25, textAlign: 'center'}}>
                Register on{' '}
                <Text
                  style={{color: 'blue', fontWeight: 'bold'}}
                  onPress={() => this.props.navigation.popToTop()}>
                  iFamuzza{' '}
                </Text>
              </Text>
            </View>
            <Input
              placeholder="Enter your email"
              errorStyle={{color: 'red'}}
              errorMessage="Enter a valid email"
              leftIcon={{
                type: 'font-awesome',
                name: 'envelope',
                color: 'gray',
                size: 19, 
                containerStyle: {marginRight: 16},
              }}          
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Enter your password"
              errorStyle={{color: 'red'}}
              errorMessage="Enter a valid password"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
              secureTextEntry
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: 'gray',
                containerStyle: {marginRight: 16},
              }}        
            />
            <Input
              placeholder="Confirm your password"
              errorStyle={{color: 'red'}}
              errorMessage="The password must be the same as the one in the previous field"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
              secureTextEntry
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: 'gray',
                containerStyle: {marginRight: 16},
              }}        
            />
            <Text style={{padding: 10, fontSize: 20}}> Optional </Text>
            <Input
              placeholder="Name"
              errorStyle={{color: 'red'}}
              errorMessage="This field can only contain letters (Max 20)"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Surname"
              errorStyle={{color: 'red'}}
              errorMessage="This field can only contain letters (Max 20)"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Phone"
              errorStyle={{color: 'red'}}
              errorMessage="This field can only contain numbers (Exactly 10)"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Allergies"
              errorStyle={{color: 'red'}}
              errorMessage=""
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Shipping address"
              errorStyle={{color: 'red'}}
              errorMessage="Invalid shipping address"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <Input
              placeholder="Payment method"
              errorStyle={{color: 'red'}}
              errorMessage="Invalid payment method"
              // onChangeText={this.updateSearch}
              // value={this.state.insert}
            />
            <View style={{borderRadius: 70, padding: 10}}>
              <Button title="Create account" type="solid" />
            </View>
            <Text style={styles.text2}>
              Are you already registered on iFamuzza?
              <Text
                style={styles.underline}
                onPress={() => this.props.navigation.goBack()}>
                Login{' '}
              </Text>
            </Text>
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
