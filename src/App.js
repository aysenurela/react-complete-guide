import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { //'class' has properties, properties are like variables of class
  // in normal JS code    var sth = "some value" => this doesn't work in a class
  something = "some value" 

  //STATE = one special property you can define in any component which extends Component
  state = {
    persons:[
      {name:"Max", age:28},
      {name:"Manu", age:29},
      {name:"Steph", age:26}
    ],
    otherStateSth: "some value"
  } // state's value is a JavaScript object
  // if state changes it will lead React to re-render our Dom, to update.

  //execute a function of your class, that is called method.
  //assign a function to a property
  switchNameHandler = () => {
    //console.log("was clicked!");
    //this.state reach to the class App with arrow function otherwise will not reach to the class
    //DO NOT MUTATE STATE DIRECTLY! this.state.persons[0].name = "Maximilian"
    this.setState( { persons:[
        {name:"Maximilian", age:28},
        {name:"Manu", age:29},
        {name:"Steph", age:27}
      ] 
    } ) // takes object an as argument and merge whatever we define here with our existing state   
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'hi, i am react app'))
    //this in Person refers to the class, App
    //onClick={this.switchNameHandler()} if paranthesis, react immediately execute that function.
  }
}

export default App;
