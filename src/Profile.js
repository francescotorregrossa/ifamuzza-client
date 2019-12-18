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

import NavigationComponent from './NavigationComponent';
import pages from './pages';

class Profile extends NavigationComponent {
  render() {
    return this.shouldRender() ? <Text>ciao</Text> : null;
  }
}

export default Profile;
