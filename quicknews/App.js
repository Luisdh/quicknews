/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SourceList from './screens/SourceList';
import CategoryScreen from './screens/CategoryScreen';

import Home from './screens/Homescreen';
import NyTimes from './screens/NyTimes';
import Cnn from './screens/Cnn';

import Drawer from './components/Drawer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createDrawerNavigator(
  {
    Headlines: CategoryScreen,
    Home: Home,
    Sources: SourceList,
    NyTimes: NyTimes,
    CNN: Cnn,
  },
  {
    contentComponent: props => <Drawer {...props} />,
  },
  {
    initialRouteName: 'Categories',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
