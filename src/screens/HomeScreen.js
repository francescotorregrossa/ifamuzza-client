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
            source={{uri: 'https://picsum.photos/400/200'}}
            style={{width: screenWidth, height: 200}}
          />
          <View style={styles.searchfield}>
            <TextInput
              style={styles.input}
              fontSize={18}
              placeholder="Search your favourite restaurant..."
              onChangeText={this.updateSearch}
              value={this.state.search}
            />
            <Button
              containerStyle={styles.searchbutton}
              buttonStyle={{borderRadius: 0}}
              type="solid"
              icon={<Icon name="md-search" color="white" size={25} />}
              onPress={this.addSearch}
            />
          </View>
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
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    width: '95%',
    overflow: 'hidden',
    marginTop: -20,
    backgroundColor: 'white',
  },
  input: {
    flex: 6,
    paddingLeft: 10,
    height: 40,
  },
  searchbutton: {
    flex: 1,
    height: 40,
  },
});

export default HomeScreen;
