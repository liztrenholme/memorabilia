import React, { Component } from 'react'
import './mem.css'

class Customers extends Component {
  constructor() {
    super()
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    fetch('/name')
      .then(res => res.json())
      .then(animals => this.setState({animals}, () => console.log('Customers fetched...', animals)))
  }

  render() {
    return (
      <div className="animals">
        <h2>Animals</h2>
        <table>
          <tbody>
            <tr>
        {this.state.animals.map(animal => 
          <td key={animal._id}>{animal.name} {animal.color}</td>
        )}
        </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Customers
