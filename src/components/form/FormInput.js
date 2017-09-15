import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Picker } from 'react-native';

export default class FormInput extends React.Component {
  constructor() {
    super();
    this.state = {columns:1};
  }
  static navigationOptions = {
    title: 'Selecci\ón de fechas',
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.texts}>Fecha de inicio: </Text>
        <TextInput
        returnKeyType='next'
        onSubmitEditing={() => this.endDateInput.focus()}
        placeholder='11-2016'
        style={styles.inputs} />

        <Text style={styles.texts}>Fecha final: </Text>
        <TextInput
        returnKeyType='go'
        ref={(input) => this.endDateInput = input}
        placeholder='09-2017'
        style={styles.inputs} />

        <Text style={styles.texts}>Columnas:</Text>
        <Picker
        style={styles.picker}
        prompt="columnas"
        mode="dropdown"
        selectedValue={this.state.columns}
        itemStyle={{color: 'white'}}
        onValueChange={(itemValue, itemIndex) => this.setState({columns: itemValue})}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>

        <TouchableOpacity  style={styles.sendContainer}>
          <Text
          style={styles.sendText}
          onPress={() => navigate('Home')}
          >Enviar</Text>
        </TouchableOpacity>

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
  inputs:{
    backgroundColor:'rgba(255, 255, 255, 0.2)',
    color: 'white',
    height: 40,
    paddingLeft: 30,
    fontSize: 30
  },
  texts:{
    fontSize: 25,
    color: '#ecf0f1',
    marginTop: 15

  },
  sendText:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  sendContainer:{
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 220
  },
  picker:{
    marginTop: -50
  }

});
