import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input, Icon} from 'react-native-elements';

import pages from './pages';

class Profile extends React.Component {
  render() {
    return this.shouldRender() ? <Text>ciao</Text> : null;
  }
}

export default Profile;
