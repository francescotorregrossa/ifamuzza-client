import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView,} from 'react-native';
import {Avatar,Divider,Input,Button, ButtonGroup} from 'react-native-elements';
import Auth from '../model/Auth';
import colors from '../colors';
import pages from '../pages';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'My account',
    };
  };

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };
 
  render() {
    console.log(Auth.instance.user)
    const {user} = Auth.instance;
    let fullName = '';
    if (user.firstName !== undefined && user.lastName !== undefined) {
      fullName = `${user.firstName} ${user.lastName}`;
    } else if (user.firstName !== undefined) {
      fullName = user.firstName;
    } else if (user.lastName !== undefined) {
      fullName = user.lastName;
    }
    const buttons = ['Carta di credito', 'Paypal'];
    const { selectedIndex } = this.state;
    
    const paymentMethod = (
      this.state.selectedIndex === 0 
      ? (<View>
        <Input
        placeholder = "Numero di carta"
        label = "Numero di carta"
        value={user.paymentMethod !== undefined ? user.paymentMethod.number : undefined}
        labelStyle={{
          color: 'black',
          fontSize: 20,
          
          marginTop: 13,
        }}
        />
        <View style = {{flexDirection : 'row'}}>
        <Input 
        containerStyle = {{width: "30%"}}
        placeholder = "CCV"
        value={user.paymentMethod !== undefined ? user.paymentMethod.ccv : undefined}
        label = "CCV"
        labelStyle={{
          color: 'black',
          fontSize: 20,
          
          marginTop: 13,
        }}
        />
        <Input
        placeholder = "Data di scadenza"
        label = "Data di scadenza"
        value={user.paymentMethod !== undefined ? user.paymentMethod.expDate : undefined}
        labelStyle={{
          color: 'black',
          fontSize: 20,
          
          marginTop: 13,
        }}
        />
        </View>
      </View>)
      : (<View>
        <Input
        placeholder = "Email"
        label = "Email"
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
        placeholder = "Password"
        label = "Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        labelStyle={{
          color: 'black',
          fontSize: 20,
          
          marginTop: 13,
        }}
        />
      </View>)
    
    );


    return(
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          >
        <View style = {{alignItems:"center"}}>
          <Avatar
           containerStyle={{marginTop: 25}}
           size="large"
           icon={{name: 'person', type: 'Ionicons', size: 48}}
           overlayContainerStyle={{backgroundColor: colors.primary}}
           rounded
          />
        </View>
        <Divider style={{ backgroundColor: 'gray', marginTop: 15, height: 1  }} />
        <View>
        <Input
          placeholder="First name"
          label="First name"
          value={user.firstName}
          autoCapitalize="words"
          autoCorrect={false}
          containerStyle={{
            marginTop: 10,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 20,
            marginTop: 13,
          }}
        />
        <Input
          label="Last name"
          placeholder='Last name'
          value={user.lastName}
          autoCapitalize="words"
          autoCorrect={false}
          containerStyle={{
            marginTop: 10,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 20,
            marginTop: 13,
          }}
        />
        <Input
          label="Email"
          placeholder='Email'
          value={user.email}
          autoCapitalize="words"
          autoCorrect={false}
          containerStyle={{
            marginTop: 10,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 20,
            marginTop: 13,
          }}
        />
        <Input
          placeholder="Address"
          label="Adderes"
          value={user.address}
          autoCapitalize="words"
          autoCorrect={false}
          containerStyle={{
            marginTop: 10,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 20,
            marginTop: 13,
          }}
        />
        <Input
          placeholder="Phone"
          label="Phone"
          value={user.phone}
          autoCapitalize="words"
          autoCorrect={false}
          containerStyle={{
            marginTop: 10,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 20,
            marginTop: 13,
          }}
        />
       <Input
          placeholder="Allergies"
          label="Allergies"
          value={user.allergies}
          autoCapitalize="none"
          autoCorrect={false}
          labelStyle={{
            color: 'black',
            fontSize: 20,
            marginTop: 13,
          }}
          />
        <Text style={{
          padding: 10, 
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 8,
          }}> Payment Method 
        </Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 44}}
          textStyle={{
            fontSize: 17,
          }}
        />
        {paymentMethod}
        <View style={{borderRadius: 70, padding: 10, marginTop: 10}}>
              <Button
                title="Update Account"
                type="solid"
                titleStyle={{
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              />
              </View>
        </View>
        </ScrollView>
      </SafeAreaView>

      
    )
  }
}

export default Profile;
