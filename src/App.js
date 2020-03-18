import React, {Component} from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textLength : 0,
    inputText : ''
  }

  InputChangeHandler = (event) =>{
    this.setState({
      textLength : event.target.value.length,
      inputText : event.target.value
    })
  }
  render(){
    let charactersList = null;

    if(this.state.textLength > 0){
      charactersList = (
        <div>
          {this.state.inputText.map((character, index)=>{
            return(
              <CharComponent Value={character} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" 
        onChange={this.InputChangeHandler} />
        <p>The length of the text is {this.state.textLength}</p>
        <Validation TextValue={this.state.textLength} />
        <div>
          {charactersList}
        </div>
      </div>
    );
  }
  
}

export default App;
