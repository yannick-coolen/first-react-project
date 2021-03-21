import React, { Component } from 'react';
import './App.css';
import './Input/Input.css'
import Input from './Input/Input'

class App extends Component {
  state = {
    labels: [
      { label: 'Firstname: '},
      { label: 'Lastname: '}
    ]
  }

  render() {
    return (
      
      <div className="App">
        <h1>Form</h1>
        <form action="http://jkorpela.fi/cgi-bin/echo.cgi" method="POST">
          <Input label={this.state.labels[0].label}/>
          <Input label={this.state.labels[1].label}/>
          <button>Send</button>
        </form>
        
      </div>
    );
  }
}

export default App;