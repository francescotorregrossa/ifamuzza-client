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
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerActions from 'react-navigation';
import pages from '../pages';

const screenWidth = Math.round(Dimensions.get('window').width);

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
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
            }}
            leftIconContainerStyle={{
              marginRight: -40,
              zIndex: 1,
            }}
            value={this.state.search}
          />

          <Button
            containerStyle={styles.searchbutton}
            buttonStyle={{margin: -1}}
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
    paddingLeft: 50,
    height: 50,
  },
  searchbutton: {
    width: '95%',
    marginTop: 8,
  },
});

export default HomeScreen;
