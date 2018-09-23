import React, { Component } from 'react';
import './mem.css';

class Featured extends Component {
  constructor() {
    super();
    this.state = {
      hi: []
    };
  }

  componentDidMount() {
    fetch('/api/hi')
      .then(res => res.json())
      .then(hi => this.setState({ hi }, () => console.log('Hellos fetched...', hi)));
  }

  render() {
    return (
      <div className="row">
        <div id="featured-items">
          <h3>Featured Items</h3>
          <tbody>
            <tr>
              {this.state.hi.map(hi =>
                <td key={hi.id}>{hi.greeting}</td>
              )}
            </tr>
          </tbody>
        </div>
      </div>
    );
  }
}

export default Featured;