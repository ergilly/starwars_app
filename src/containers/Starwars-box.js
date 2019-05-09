import React, { Component } from 'react';
import CharacterBox from '../components/CharacterBox'
import './starwars-box.css'


class StarwarsBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      previous: null,
      next: null,
      currentpage: 1,
      userInput: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.lastpage = this.lastpage.bind(this);
    this.nextpage = this.nextpage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetPage = this.resetPage.bind(this);
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

  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    const pages = document.querySelector('.pages')
    pages.style.display = 'none'
    const reset = document.querySelector('.reset')
    reset.style.display = 'block'
    fetch(`https://swapi.co/api/people/?search=${this.state.userInput}`)
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

  resetPage(evt) {
    this.componentDidMount()
    const pages = document.querySelector('.pages')
    pages.style.display = 'flex'
    const reset = document.querySelector('.reset')
    reset.style.display = 'none'
  }

  render() {
    console.log(this.state.characters);
    return(

      <div className='center'>

      <h1>StarWars Character Reference Database</h1>


      <div className='flex pages'>
        <a id='tab-button' onClick={this.lastpage} className="ui active button"><i className="angle double left icon"></i> Previous</a>
        <i className='currentpage'>Page {this.state.currentpage}</i>
        <a id='tab-button' onClick={this.nextpage} className="ui active button">Next <i className="angle double right icon"></i></a>
      </div>
      <button id='tab-button' className='reset' onClick={this.resetPage}>Reset</button>
      <div id='form' className='ui form'>
        <form id='inside-form' onSubmit={this.handleSubmit} className='ui two fields'>
          <input className='field' type='text' name='name' onChange={this.handleChange}></input>
          <input className='field' type='submit' value='Search'></input>
        </form>
      </div>
      <CharacterBox charactersData={this.state.characters}/>

      </div>
    )
  }


}

export default StarwarsBox;
