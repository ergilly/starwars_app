import React, { Component } from 'react';
import CharacterBox from '../components/CharacterBox'
import Search from '../components/Search'
import './starwars-box.css'


class StarwarsBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      previous: null,
      next: null,
      currentpage: 1
    }
    this.lastpage = this.lastpage.bind(this);
    this.nextpage = this.nextpage.bind(this);
  }

  componentDidMount() {
      fetch(`https://swapi.co/api/people/`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          characters: data.results,
          previous: data.previous,
          next: data.next,
          currentpage: 1
        })
      })

  }

  lastpage(evt) {
    fetch(this.state.previous)
    .then(res => res.json())
    .then(data => {
      this.setState({
        characters: data.results,
        previous: data.previous,
        next: data.next,
        currentpage: this.state.currentpage-1
      })
    })
  }

  nextpage(evt) {
    fetch(this.state.next)
    .then(res => res.json())
    .then(data => {
      this.setState({
        characters: data.results,
        previous: data.previous,
        next: data.next,
        currentpage: this.state.currentpage+1
      })
    })
  }

  render() {
    console.log(this.state.characters);
    return(

      <div className='center'>

      <h1>StarWars Character Reference Database</h1>


      <div className='flex'>
        <a onClick={this.lastpage}>previous</a>
        <div className='currentpage'>{this.state.currentpage}</div>
        <a onClick={this.nextpage}>next</a>
      </div>

      <CharacterBox charactersData={this.state.characters}/>

      </div>
    )
  }


}

export default StarwarsBox;
