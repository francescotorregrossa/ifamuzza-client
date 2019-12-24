import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {ListItem} from 'native-base';
import Auth from '../model/Auth';
import pages from '../pages';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      query: props.navigation.state.params,
      data: [],
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    console.log('prova');
    const url = `http://192.168.1.7:8080/api/search?address=${this.state.query}`;
    this.setState({loading: true});
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log('data: ', res);
        this.setState({
          data: res,
          error: null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        console.log('error: ', error.message);
        this.setState({
          error,
          loading: false,
        });
      });
  };

  render() {
    return (
      <>
        <FlatList
          data={this.state.data}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </>
    );
  }
}

export default Search;
