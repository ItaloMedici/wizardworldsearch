import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import Home from './src/screens/Home';
import Theme from './src/Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
}
