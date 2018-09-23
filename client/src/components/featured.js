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
      <div>
        <table>
          <tbody>
            <tr>
              {this.state.hi.map(hi =>
                <td key={hi.id}>{hi.greeting}</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default Featured;