import React from 'react';
import {View,StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

import FormInput from './src/components/form/FormInput';
import Calendar from './src/components/calendar/Calendar';



 const SimpleApp = StackNavigator({
   Form: { screen: FormInput },
  Home: { screen: Calendar },

});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleApp style={styles.titleContainer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    margin: 0,
    backgroundColor: '#2980b9',
    flex: 1,
    margin:'auto'
  },
  titleContainer:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  }
});
