import React from 'react';
import './main.css'

const Character = (props) => {

  return(
    <div id='padding' className='ui card'>
      <h3>{props.data.name}</h3>
      <p>Height: {props.data.height/100}m</p>
      <p>Weight: {props.data.mass/100}kg</p>
      <p>Birth Year: {props.data.birth_year}</p>
    </div>
  )
}


export default Character
