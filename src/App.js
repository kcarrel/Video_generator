import React, { Component} from 'react';
import Search from './components/Search'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  // searchByKeyword() {
  //   let results = Youtube.Search.list('id, sinppet', {q: ${this.state.search}, maxResults: 1});

  // }
  render () {
    return (
      <Search></Search>
    );
  }
}

export default App;
