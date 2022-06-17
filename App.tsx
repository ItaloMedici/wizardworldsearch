import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import Theme from './src/Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
}
