import React, { Component } from 'react';
import './customers.css';

class Hi extends Component {
  constructor() {
    super();
    this.state = {
      hi: []
    };
  }

  componentDidMount() {
    fetch('/api/hi')
      .then(res => res.json())
      .then(hi => this.setState({hi}, () => console.log('Hellos fetched...', hi)));
  }

  render() {
    return (
      <div>
        <h2>So many ways to say hi!</h2>
        <ul>
        {this.state.hi.map(hi => 
          <li key={hi.id}>{hi.greeting}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Hi;