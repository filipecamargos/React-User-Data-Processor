import './App.css';
import React, { Component } from 'react';
import User from './User/User'

class App extends Component {
  
  render() {
    const style = {
      backgroundColor: "white",
      border: '1px solid blue',
      padding: '8px',
      textAlign: 'center',
    }

    return (
      <div className="App">
        <h1 style={style}>First React App</h1>
        <User/>
      </div>
    );
  }
}

export default App;
