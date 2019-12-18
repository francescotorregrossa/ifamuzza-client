import React from 'react';
import {Input, Icon} from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Login extends React.Component {
    
    loginIcon = () => <Icon
        name='user'
        size={24}
        color='black'
    />;

    render(){
        return (
            <View >
                <Input style={{padding: 30}}
                    placeholder='INPUT WITH CUSTOM ICON'
                    //leftIcon={this.loginIcon}
                />
                <Input style={{padding: }}
                    placeholder='INPUT WITH CUSTOM ICON'
                    //leftIcon={this.loginIcon}
                />
            </View>
        );
    }
    
};
export default Login;