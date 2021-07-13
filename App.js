import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Relogio from './src/screens/Relogio';
import Cronometro from './src/screens/Cronometro';

import Routes from './src/Routes/Routes';

export default function App() {
  return (
    <>
    
     {/* <Relogio />
    <Cronometro/> */}

    <Routes />

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
