import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card, Button, Rating, Tile, Image} from 'react-native-elements';
import {HeaderBackButton} from 'react-navigation-stack';
import Spinner from 'react-native-spinkit';
import Auth from '../model/Auth';
import pages from '../pages';
import colors from '../colors';

const screenWidth = Math.round(Dimensions.get('window').width);

class Search extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params,
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.goBack()} />
      ),
    };
  };

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
    const url = `http://127.0.0.1:8080/api/search?address=${this.state.query}`;
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

  showDetails = id => {
    console.log('show details for restaurant', id);
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.showDetails(item.id)}>
              <Card>
                <Tile
                  title={item.name}
                  caption="Pizza & Hamburger"
                  imageSrc={{uri: 'https://picsum.photos/400/150'}}
                  width={screenWidth - 30}
                  featured
                  containerStyle={{
                    marginLeft: -16,
                    marginRight: -16,
                    marginTop: -16,
                    height: 150,
                    overflow: 'hidden',
                  }}
                  titleStyle={{
                    marginTop: -150,
                    textShadowRadius: 8,
                    textShadowColor: '#000',
                    fontWeight: '600',
                  }}
                  captionStyle={{
                    textShadowRadius: 4,
                    textShadowColor: '#000',
                    fontWeight: '600',
                  }}
                />

                <Rating style={{marginTop: 15}} readonly imageSize={24} />

                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    color: 'gray',
                    textAlign: 'center',
                  }}>
                  {item.address}
                </Text>

                <Button
                  title="ORDER NOW"
                  buttonStyle={{
                    height: 48,
                    backgroundColor: colors.primary,
                  }}
                />
              </Card>
            </TouchableOpacity>
          )}
        />

        <Spinner
          style={{marginTop: 50}}
          size={50}
          isVisible={this.state.loading}
          type="Arc"
          color={colors.primary}
        />
      </View>
    );
  }
}

export default Search;
