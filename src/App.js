import React, { Component} from 'react';
import Search from './components/Search'
import ReactPlayer from 'react-player'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()  
    this.searchByKeyword()
  }

  searchByKeyword() {
    // fetch to the backend 
    // call the youtube data api for the query
    // use result to generate the iframe
  }
  render () {
    return (
      <Search 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        search={this.state.search}
        ></Search>
    );
  }
}

export default App;
