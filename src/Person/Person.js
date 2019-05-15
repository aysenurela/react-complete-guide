import React from 'react'

const person = (props) => {
    return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old!!</p>
        <p>{props.children}</p> 
    </div>
    ) // this is functional component
    //if this is a class component you need to use {this.props.name}
    //children refers to any elements btw the opening and closing tag of our component
};

export default person;