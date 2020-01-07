import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
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

  isOpen = openingTimes => {
    const date = new Date();
    const n = date.getDay();

    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const day = days[n];

    const hh = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    const mm =
      date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

    for (let i = 0; i < openingTimes.length; i += 1) {
      if (openingTimes[i].substring(0, 3) === day) {
        const times = openingTimes[i].substring(4);
        const start = times.substring(0, 5);
        const end = times.substring(6);

        const s = Date.parse(`01/01/2011 ${start}`);
        const now = Date.parse(`01/01/2011 ${hh}:${mm}`);
        const e = Date.parse(`01/01/2011 ${end}`);

        return s <= now && now <= e;
      }
    }

    return false;
  };

  makeRemoteRequest = () => {
    const url = `http://${Auth.instance.baseUrl}:8080/api/search?address=${this.state.query}`;
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
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Spinner
            style={{marginTop: 50}}
            size={50}
            isVisible={this.state.loading}
            type="Pulse"
            color={colors.primary}
          />
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
                    caption={
                      this.isOpen(item.openingTime) ? 'Aperto' : 'Chiuso'
                    }
                    imageSrc={{
                      uri: `http://${Auth.instance.baseUrl}:8080/imgs_rest/${item.id}.jpg`,
                    }}
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
                      fontWeight: '800',
                    }}
                    captionStyle={{
                      textShadowRadius: 4,
                      textShadowColor: '#000',
                      fontWeight: '800',
                      fontSize: 16,
                      borderRadius: 4,
                      padding: 4,
                      overflow: 'hidden',
                      backgroundColor: this.isOpen(item.openingTime)
                        ? 'green'
                        : 'red',
                    }}
                  />

                  <Rating
                    startingValue={4}
                    style={{marginTop: 15}}
                    readonly
                    imageSize={24}
                  />

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
        </View>
      </SafeAreaView>
    );
  }
}

export default Search;
