import React, { Component} from 'react';
import Search from './components/Search'
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
  }

  // searchByKeyword() {
  //   let results = Youtube.Search.list('id, sinppet', {q: ${this.state.search}, maxResults: 1});

  // }
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
