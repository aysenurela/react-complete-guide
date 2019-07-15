import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

const app = props => { //'class' has properties, properties are like variables of class
  // in normal JS code    var sth = "some value" => this doesn't work in a class

  const [personsState, setPersonsState] = useState({
      persons:[
        {name:"Max", age:28},
        {name:"Manu", age:29},
        {name:"Steph", age:26}
      ],
      otherStateSth: "some value"
    })

    // can use useState multiple times

    const switchNameHandler = () => {
        setPersonsState({ 
          persons:[
            {name:"Maximilian", age:28},
            {name:"Manu", age:29},
            {name:"Steph", age:27}
          ],
          otherStateSth:personsState.otherStateSth
          //with react hooks changing state; does not merge changes with the state it directly changes / replaces old state
        })   
      }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} /> 
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'hi, i am react app'))
    //this in Person refers to the class, App
    //onClick={this.switchNameHandler()} if paranthesis, react immediately execute that function.
  }

export default app;

  // //STATE = one special property you can define in any component which extends Component
  // state = {
  //   persons:[
  //     {name:"Max", age:28},
  //     {name:"Manu", age:29},
  //     {name:"Steph", age:26}
  //   ],
  //   otherStateSth: "some value"
  // } // state's value is a JavaScript object
  // // if state changes it will lead React to re-render our Dom, to update.

  // //execute a function of your class, that is called method.
  // //assign a function to a property
  // switchNameHandler = () => {
  //   //console.log("was clicked!");
  //   //this.state reach to the class App with arrow function otherwise will not reach to the class
  //   //DO NOT MUTATE STATE DIRECTLY! this.state.persons[0].name = "Maximilian"
  //   this.setState({ 
  //     persons:[
  //       {name:"Maximilian", age:28},
  //       {name:"Manu", age:29},
  //       {name:"Steph", age:27}
  //     ] 
  //   }) // takes object an as argument and merge whatever we define here with our existing state   
  // }
