/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Icon, SearchBar, TabBar } from 'antd-mobile-rn';
import MyFrame from "./js/MyFrame";

export default class SaleMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  renderContent(pageText) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
          <SearchBar placeholder="Search" showCancelButton />
          <Text style={{ margin: 50 }}>{pageText}</Text>
        </View>
    );
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    return (
        <MyFrame/>
    );
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

AppRegistry.registerComponent('SaleMobile', () => SaleMobile);
