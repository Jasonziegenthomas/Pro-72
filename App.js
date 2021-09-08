
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import EnterDetails from './screens/enterDetails';
import readDetail from './screens/readDetail';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
}}
const TabNavigator = createBottomTabNavigator({
  EnterDetails:{screen:EnterDetails},
  readDetail:{screen:readDetail}
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
