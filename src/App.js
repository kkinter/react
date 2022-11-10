import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
    alert('hello. You clicked me');
  }

function ShowMessage(props){
  if(props.toShow){
    return <h2>My msg</h2>
  } else {
    return <h2>Forbidden</h2>
  }
}


function App() {
  const userlogin = true;
  if (userlogin) {
    return (
      <div className="App">
        <Header info="this is MY msg"/>
        <p>main content</p>
        <Footer trademark="page by Wook"
          myalert={createAlert}/>
          <ShowMessage toShow={true}/>
      </div>
    );
  } else {
    return <h2>Forbidden</h2>
  }

}

export default App;
