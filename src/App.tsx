import React, { useState } from 'react';
import { AppWrapper } from './context/state';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Table from './components/table';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import Loader from './components/primitives/loader';

function App() {
  const getTheme = localStorage.getItem('themes') || 'dark';
  const [theme, setTheme] = useState<string>(getTheme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles></GlobalStyles>
      <AppWrapper>
        <div className="App">
          <Header setThemes={setTheme} />
          <Hero />
          <Table />
          <Loader />
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
