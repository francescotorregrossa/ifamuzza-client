import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import pages from '../pages';
import Auth from '../model/Auth';
import DrawerHeader from './DrawerHeader';

function DrawerContent(props) {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <DrawerHeader
          key="header"
          user={Auth.instance.user}
          onPress={() =>
            props.navigation.navigate(
              Auth.instance.isLoggedIn() ? pages.profile : pages.login,
            )
          }
        />
        {props.items.map(section => (
          <Button
            key={section.key}
            title={section.routeName}
            type="clear"
            titleStyle={{
              fontSize: 18,
              color: 'black',
            }}
            icon={{
              name: 'home',
              size: 30,
              color: 'black',
            }}
            iconContainerStyle={{
              paddingRight: 10,
            }}
            buttonStyle={{
              justifyContent: 'flex-start',
            }}
            containerStyle={{
              marginTop: 20,
            }}
            onPress={() => props.navigation.navigate(section.key)}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default DrawerContent;
