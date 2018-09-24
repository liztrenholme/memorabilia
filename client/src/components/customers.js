import React, { Component } from 'react';
import './mem.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
  }

  componentDidMount() {
    fetch('/name')
      .then(res => res.json())
      .then(animals => this.setState({animals}, () => console.log('Customers fetched...', animals)));
  }

  render() {
    return (
      <div>
        <h2>Animals</h2>
        <ul>
        {this.state.animals.map(animal => 
          <li key={animal.id}>{animal.name} {animal.color}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
