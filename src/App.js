import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header info="this is MY msg"
      myNumber="6"/>
      <p>main content</p>
      <Footer trademark="page by Wook"/>
    </div>
  );
}

export default App;
