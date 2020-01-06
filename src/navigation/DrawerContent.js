import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import pages, {pageIcons} from '../pages';
import colors from '../colors';
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
              color:
                props.activeItemKey === section.key ? colors.primary : 'black',
              fontWeight:
                props.activeItemKey === section.key ? 'bold' : 'normal',
            }}
            icon={{
              name: pageIcons[section.key],
              size: 30,
              color:
                props.activeItemKey === section.key ? colors.primary : 'black',
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

        {Auth.instance.isLoggedIn() ? (
          <Button
            title="Logout"
            type="clear"
            titleStyle={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'normal',
            }}
            icon={{
              name: 'sign-out-alt',
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
          />
        ) : null}
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
