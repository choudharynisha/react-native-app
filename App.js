import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text>Welcome to my FIRST React Native App!</Text>
      <Button title = 'My First Button' icon = {{ name: 'code'}} />
      <StatusBar style = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
