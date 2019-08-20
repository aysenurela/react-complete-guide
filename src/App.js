import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: "asd", name: 'Max', age: 28 },
      { id: "as", name: 'Manu', age: 29 },
      { id: "d", name: 'Steph', age: 26 }
    ],
    otherStateSth: 'some value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice() // to copy array
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
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
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
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
