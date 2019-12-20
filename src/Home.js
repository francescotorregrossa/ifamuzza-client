import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import {SearchBar,Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import Profile from './Profile';
import pages from './pages';

class Home extends React.Component {
  state ={
    search: "",
  };
  updateSearch = (value) => {
    this.setState({ 
      search: value,
      searchList: [],
    });
  };

  addSearch = () => {
      if(this.state.search.trim()===''){
        return
      }
      this.setState(prevState => {
        return {
          searchList: prevState.searchList.concat(prevState.search)
        }
      })
      this.setState({search: ""})
  }

  render() {
    const { search } = this.state;

    return (
      <>
        <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.container}>
            <View style={styles.logoview}> 
            <Button
                style={styles.menustyle}
              //aggiungere apertura menu(info: about us, contact us , ..) onPress={() => } 
                type="outline"
                icon={<Icon name="md-menu" color="black" size={25} />}
              />
            <Text style={styles.logostyle}>iFamuzza</Text>
            <Button
                style={styles.signbutton}
                onPress={() => this.props.navigation.navigate(pages.login)}
                type="outline"
                icon={<Icon name="md-person" color="black" size={25} />}
              />
            </View>  
            <View style={styles.searchbutton}>
            <TextInput
                style={styles.input}
                placeholder="Search your favourite restaurant.."
                onChangeText={this.updateSearch}
                value={this.state.search}
              />
              <Button 
              type="outline"
              icon={<Icon name="md-search" color="black" size={25} />}
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
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signbutton:{
    left: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logostyle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    right: 20,
    
  },
  logoview: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 345,
    left: 20,
    flexDirection: 'row',
  },
  menustyle: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 125,
  },
  searchbutton: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
  input:{
    width: '80%',
  },
});

export default Home;
