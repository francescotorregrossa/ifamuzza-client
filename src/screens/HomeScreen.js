import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {SearchBar, Input, Button, Image, Card} from 'react-native-elements';

import Geolocation from '@react-native-community/geolocation';
import opencage from 'opencage-api-client';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../colors';
import pages from '../pages';

const image = require('../images/home.jpg');

const screenWidth = Math.round(Dimensions.get('window').width);

async function androidRequestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'iFamuzza Location Permission',
        message: 'iFamuzza requires access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.log(err);
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: undefined};
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    } else {
      androidRequestLocationPermission();
    }

    Geolocation.getCurrentPosition(
      position => {
        console.log('Current location', position.coords);
        opencage
          .geocode({
            key: '94fb6718402f47f4be7355f37ed151cc',
            q: `${position.coords.latitude}, ${position.coords.longitude}`,
          })
          .then(response => {
            const result = response.results[0];
            if (result.formatted !== undefined) {
              const {formatted} = result;
              if (this.state.search === undefined) {
                this.setState({search: formatted});
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      },
      {
        timeout: 5000,
      },
    );
  }

  updateSearch = value => {
    this.setState({search: value === '' ? undefined : value});
  };

  performSearch = () => {
    if (this.state.search !== undefined) {
      this.props.navigation.navigate(pages.search, this.state.search);
    }
  };

  ratingCompleted(rating) {
    console.log(`Rating is: ${rating}`);
  }

  render() {
    const {search} = this.state;

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Image source={image} style={{width: screenWidth, height: 400}} />

          <Input
            inputStyle={styles.searchfield}
            inputContainerStyle={{borderBottomWidth: 0, marginTop: -60}}
            placeholder="Your location"
            placeholderTextColor="gray"
            onChangeText={this.updateSearch}
            onSubmitEditing={this.performSearch}
            leftIcon={{
              name: 'pin-drop',
              type: 'Ionicons',
              color: colors.primary,
              size: 32,
            }}
            leftIconContainerStyle={{
              marginRight: -48,
              zIndex: 1,
            }}
            value={this.state.search}
          />

          <Button
            containerStyle={styles.searchbutton}
            activeOpacity={0.7}
            buttonStyle={{
              margin: -1,
              backgroundColor: colors.primary,
              height: 48,
            }}
            type="solid"
            title="Find restaurants"
            onPress={this.performSearch}
            disabled={this.state.search === undefined}
          />
          <Text
            style={{
              marginTop: 35,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            Most popular
          </Text>

          <ScrollView
            style={{marginBottom: 10}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              title="Pizza"
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Card
                image={require('../images/pizza.jpg')}
                containerStyle={{
                  marginTop: 20,
                  marginLeft: 10,
                  width: 180,
                }}>
                <Button
                  buttonStyle={{
                    borderRadius: 8,
                  }}
                  title="Pizza"
                />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              title="Hamburger"
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Card
                image={require('../images/hamburger.jpg')}
                containerStyle={{
                  marginTop: 20,
                  marginLeft: 3,
                  width: 180,
                }}>
                <Button
                  buttonStyle={{
                    borderRadius: 8,
                  }}
                  title="Hamburger"
                />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              title="Kebab"
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Card
                image={require('../images/kebab.jpg')}
                containerStyle={{
                  marginTop: 20,
                  marginLeft: 3,
                  width: 180,
                }}>
                <Button
                  buttonStyle={{
                    borderRadius: 8,
                  }}
                  title="Kebab"
                  onPress={this.performSearch}
                  disabled={this.state.search === undefined}
                />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              title="Steak House"
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Card
                image={require('../images/steak.jpg')}
                containerStyle={{
                  marginTop: 20,
                  marginLeft: 3,
                  width: 180,
                }}>
                <Button
                  buttonStyle={{
                    borderRadius: 8,
                  }}
                  title="Steak House"
                />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              title="Sushi"
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Card
                image={require('../images/sushi.jpg')}
                containerStyle={{
                  marginTop: 20,
                  marginLeft: 3,
                  width: 180,
                }}>
                <Button
                  buttonStyle={{
                    borderRadius: 8,
                  }}
                  title="Sushi"
                />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              title="Sandwiches"
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Card
                image={require('../images/sandwiches.jpg')}
                containerStyle={{
                  marginTop: 20,
                  marginLeft: 3,
                  width: 180,
                }}>
                <Button
                  buttonStyle={{
                    borderRadius: 8,
                  }}
                  title="Sandwiches"
                />
              </Card>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchfield: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    width: '95%',
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 60,
    height: 50,
  },
  searchbutton: {
    width: '95%',
    marginTop: 8,
  },
  foodstyle: {
    width: 151,
    height: 91,
    marginTop: 15,
    marginStart: 6,
    borderWidth: 0.4,
    alignItems: 'center',
  },
});

export default HomeScreen;
