import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 26 }
    ],
    otherStateSth: 'some value',
    showPersons: false
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Steph', age: 27 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Steph', age: 26 }
      ]
    })
  }

  // bind method is more efficient than the arrow syntax

  togglePersonsHandler = () => {
    const showNames = this.state.showPersons
    this.setState({ showPersons: !showNames })
  }

  render() {
    //Normal JS code here, not JSX 

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}
          >
            My hobbies: Racing{' '}
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      )
    }

    return ( //JSX is only here 
      <div className='App'>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    )
  }
}

export default App
