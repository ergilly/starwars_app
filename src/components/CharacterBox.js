import React from 'react';
import Character from './Character'
import './main.css'

const CharacterBox = (props) => {
  console.log(props);
  let characters = props.charactersData.map((character, index) => {
    return <Character data={character} key={index} />
  });

  return (
    <div className="characters-view">
      {characters}
    </div>
  )

}

export default CharacterBox;
