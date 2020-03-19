import React, {Component} from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText : ''
  }

  InputChangeHandler = (event) =>{
    this.setState({ 
      inputText : event.target.value
    })
  }

  deleteClickedHandler = (index) =>{
    let newCharacter = this.state.inputText.split('');
    newCharacter.splice(index,1);
    const updatedText = newCharacter.join('');

    this.setState({
      inputText: updatedText
    })
  }
  render(){
    const charactersList = (
      <div>
        {this.state.inputText.split('').map((character, index)=>{
          return(
            <CharComponent Value={character} key={index}
            Clicked={() => this.deleteClickedHandler(index)} />
          );
        })}
      </div>
    );
    
    return (
      <div className="App">
        <input type="text" 
        onChange={this.InputChangeHandler} value={this.state.inputText} />
        <p>The length of the text is {this.state.inputText.length}</p>
        <Validation TextValue={this.state.inputText.length} />
        <div>
          {charactersList}
        </div>
      </div>
    );
  }
  
}

export default App;
