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
      data: [],
      seed: 1,
      page: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const {page, seed} = this.state;
    const url =
      'http://127.0.0.1:8080/api/search?address=Via%20Giuseppe%20Patricolo,%206,%20Palermo'; // link api
    this.setState({loading: true});
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
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
          // data={this.state.data}
          renderItem={({item}) => (
            <ListItem
              roundAvatar
              title={'${item.name.first}'}
              avatar={{uri: item.picture.thumbnail}} // info sui locali presi dall'api, modificare se necessario
            />
          )}
          keyExtractor={item => this.state.data[item].id}
        />
      </>
    );
  }
}

export default Search;
