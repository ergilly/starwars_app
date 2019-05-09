import React, {Component} from 'react';
import './main.css'

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.data.name,
      height: props.data.height,
      weight: props.data.mass,
      birth_year: props.data.birth_year
    }

  }

  render() {
    return(
      <div>
        <h3>{this.state.name}</h3>
        <p>Height: {this.state.height/100}m</p>
        <p>Weight: {this.state.weight/100}kg</p>
        <p>Birth Year: {this.state.birth_year}</p>
      </div>
    )
  }
}

export default Character
