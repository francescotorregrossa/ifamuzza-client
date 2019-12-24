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
} from 'react-native';
import {SearchBar, Input, Button, Image} from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';
import opencage from 'opencage-api-client';
import colors from '../colors';
import pages from '../pages';

const screenWidth = Math.round(Dimensions.get('window').width);

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchList: [],
    };
  }

  componentDidMount() {
    Geolocation.requestAuthorization();

    Geolocation.getCurrentPosition(position => {
      opencage
        .geocode({
          key: '94fb6718402f47f4be7355f37ed151cc',
          q: `${position.coords.latitude}, ${position.coords.longitude}`,
        })
        .then(response => {
          const result = response.results[0];
          if (result.formatted !== undefined) {
            const {formatted} = result;
            if (this.state.search === '') {
              this.setState({search: formatted});
            }
          }
        });
    });
  }

  updateSearch = value => {
    this.setState({
      search: value,
      searchList: [],
    });
  };

  addSearch = () => {
    if (this.state.search.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        searchList: prevState.searchList.concat(prevState.search),
      };
    });
    this.props.navigation.navigate(pages.search, this.state.search);
    this.setState({search: ''});
  };

  render() {
    const {search} = this.state;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Image
            source={{uri: 'https://picsum.photos/400/250'}}
            style={{width: screenWidth, height: 250}}
          />

          <Input
            inputStyle={styles.searchfield}
            inputContainerStyle={{borderBottomWidth: 0, marginTop: -60}}
            placeholder="Your location"
            placeholderTextColor="gray"
            onChangeText={this.updateSearch}
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
            buttonStyle={{
              margin: -1,
              backgroundColor: colors.primary,
              height: 48,
            }}
            type="solid"
            title="Find restaurants"
            onPress={this.addSearch}
            /*
            icon={{
              name: 'search',
              type: 'MaterialIcons',
              color: 'white',
              size: 25,
            }}
            */
          />
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
});

export default HomeScreen;
