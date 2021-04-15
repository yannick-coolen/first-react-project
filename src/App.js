import React, { Component } from 'react';
import './App.scss';
import './Input/Input.scss'
import Input from './Input/Input'
import Output from './Output/Output';
import Validation from './Valdiation/Validation'

class App extends Component {
  state = {
    userInput: '' 
  }

  handleChange = (event) => {
    this.setState( {
      userInput: event.target.value   
    });
  }

  render() {
    return (
      
      <div className="App">
        <h1>Form</h1>
        <form>
          <Input
          changed={this.handleChange}/>
          <Output 
          userInput={this.state.userInput}
          />  
        </form> 
        <br />
        <Validation inputLength={this.state.userInput.length}/> 
      </div>
      
    );
  }
}

export default App;