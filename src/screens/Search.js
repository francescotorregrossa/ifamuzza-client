import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Auth from '../model/Auth';
import pages from '../pages';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.navigation.state.params,
    };
  }

  render() {
    console.log('suca', this.state.city);
    return null;
  }
}

export default Search;
