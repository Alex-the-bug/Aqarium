import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, ImageStore, Image } from 'react-native';
import { ImageBackground, StyleSheet, ImageButton, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFC0CB",
    padding: 20,
    textAlign: "center",
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 30

  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
}
);


export default class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      current_salinity: '',
      target_salinity: '',
      added_salt: ''
    };
  }

  updateSalinity() {
    this.current_salinity
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.updateSalinity()}>
          <ImageBackground source={DisplayMode.tileImage} resizeMode={'contain'} style={styles.button}>
            <Text style={{
              textAlign: "center",
              color: DisplayMode.tileColor,
              fontFamily: "Minecraft",
              fontSize: 48,
            }} adjustsFontSizeToFit numberOfLines={1}>Settings</Text>
          </ImageBackground>
        </TouchableOpacity>

        <Text>Aquarium app</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}