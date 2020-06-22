import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import { Layout } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
