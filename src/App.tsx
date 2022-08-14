import React from 'react';
import { AppWrapper } from './context/state';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Table from './components/table';

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Header />
        <Hero />
        <Table />
      </div>
    </AppWrapper>
  );
}

export default App;
