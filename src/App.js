import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
    alert('hello. You clicked me');
  }


function App() {
  return (
    <div className="App">
      <Header info="this is MY msg"/>
      <p>main content</p>
      <Footer trademark="page by Wook"
        myalert={createAlert}/>
    </div>
  );
}

export default App;
