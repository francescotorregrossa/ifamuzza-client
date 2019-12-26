import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements';
import colors from '../colors';

function DrawerHeader(props) {
  const {user, onPress} = props;

  if (user !== undefined) {
    const {email} = user;

    let fullName = '';
    if (user.firstName !== undefined && user.lastName !== undefined) {
      fullName = `${user.firstName} ${user.lastName}`;
    } else if (user.firstName !== undefined) {
      fullName = user.firstName;
    } else if (user.lastName !== undefined) {
      fullName = user.lastName;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{backgroundColor: '#eee', alignItems: 'center'}}>
        <Avatar
          containerStyle={{marginTop: 25}}
          size="large"
          icon={{name: 'person', type: 'Ionicons', size: 48}}
          overlayContainerStyle={{backgroundColor: colors.primary}}
          // title={firstName[0] + lastName[0]}
          rounded
        />
        <Text style={{fontSize: 16, marginTop: 10}}>{fullName}</Text>
        <Text
          style={{
            fontSize: 14,
            color: '#555',
            fontWeight: '300',
            marginBottom: 20,
          }}>
          {email}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{backgroundColor: '#eee', alignItems: 'center'}}>
      <Avatar
        containerStyle={{marginTop: 25}}
        size="large"
        icon={{name: 'person', type: 'Ionicons', size: 48}}
        // title={firstName[0] + lastName[0]}
        rounded
      />
      <Text style={{fontSize: 16, marginTop: 10, marginBottom: 20}}>
        Login on iFamuzza
      </Text>
    </TouchableOpacity>
  );
}

DrawerHeader.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  onPress: PropTypes.func.isRequired,
};

DrawerHeader.defaultProps = {
  user: undefined,
};

export default DrawerHeader;
