import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  searchByKeyword() {
    let results = Youtube.Search.list('id, sinppet', {q: ${this.state.search}, maxResults: 1});

  }
  render () {
    return (
      <div>Hi</div>
    );
  }
}

export default App;
