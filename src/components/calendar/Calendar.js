import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Picker } from 'react-native';

export default class Calendar extends React.Component {
  static navigationOptions = {
    title: 'Calendario',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#2980b9'
  },
  sendContainer:{
    backgroundColor: 'green'
  }

});
