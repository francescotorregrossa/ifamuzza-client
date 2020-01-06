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
import {
  SearchBar,
  Input,
  Button,
  Image,
  Rating,
  AirbnbRating,
} from 'react-native-elements';

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
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
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
              marginTop: 15,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Most popular
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.foodstyle}
              activeOpacity={0.5}
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Image
                source={require('../images/pizza.jpg')}
                style={styles.imgstyle}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.foodstyle}
              activeOpacity={0.5}
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Image
                source={require('../images/hamburger.jpg')}
                style={styles.imgstyle}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.foodstyle}
              activeOpacity={0.5}
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Image
                source={require('../images/kebab.jpg')}
                style={styles.imgstyle}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.foodstyle}
              activeOpacity={0.5}
              onPress={this.performSearch}
              disabled={this.state.search === undefined}>
              <Image
                source={require('../images/steak.jpg')}
                style={styles.imgstyle}
              />
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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
  imgstyle: {
    alignItems: 'center',
    borderColor: 'rgb(255, 255, 255)',
    height: 90,
    width: 155,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
