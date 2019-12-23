import React, {Component} from 'react';
import {Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DrawerHeader = function(props) {
  const {user} = props;

  if (user !== undefined) {
    const {firstName, lastName, email} = user;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        style={{backgroundColor: '#eee', alignItems: 'center'}}>
        <Avatar
          containerStyle={{marginTop: 25}}
          size="large"
          icon={{name: 'person', type: 'Ionicons', size: 48}}
          // title={firstName[0] + lastName[0]}
          rounded
        />
        <Text style={{fontSize: 16, marginTop: 10}}>
          {`${firstName} ${lastName}`}
        </Text>
        <Text style={{fontSize: 14, color: 'gray', marginBottom: 20}}>
          {email}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={{backgroundColor: '#eee', alignItems: 'center'}}>
      <Avatar
        containerStyle={{marginTop: 25}}
        size="medium"
        icon={{name: 'person', type: 'Ionicons', size: 32}}
        // title={firstName[0] + lastName[0]}
        rounded
      />
      <Text style={{fontSize: 16, marginTop: 10, marginBottom: 20}}>
        Login on iFamuzza
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerHeader;
