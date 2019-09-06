import React, { Component} from 'react';
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'
import BottomNavigationBar from './components/BottomNavigationBar'

import Home from './components/Home'
import About from './components/About'

import HomeBar from './components/HomeBar'
import LoggedInBar from './components/LoggedInBar'

import Collection from './components/Collection'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import ReactPlayer from 'react-player'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '', 
      email: '',
      password: '',
      hasTyped: false,
      loggedIn: false,
      token: '',
      collection: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChangeLogin = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
    this.setState({ hasTyped: true })
  }

  handleLogin = (ev) => {
    ev.preventDefault()
    //post to user database
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: this.state.email,
          password: this.state.password,
        }
      })
    })
      .then(r => r.json())
      .then(json => {
        if (json.user) {
          localStorage.setItem('UserID', json.user.id);
          localStorage.setItem('Token', json.jwt);
          localStorage.setItem('UserName', json.user.name);
          this.setState({ 
            loggedIn: true,
            token: json.jwt
          })
        
        } else {
          console.log('This is a goof. Put a failure notification here.')
        }
      })
      .then(() => {
        this.fetchCollection()
      })
  }

  fetchCollection() {
    //gotta send the token over
    fetch((`http://localhost:3000/collections/${localStorage.getItem('UserID')}`), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ collection: json.items[0].collection_id });
      })
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
      <Router>
        {(this.state.loggedIn) ?
          <LoggedInBar />
          :
          <HomeBar />
        }
        <Route exact path='/' render={(props) => <Home {...props} />}
        />
        <Route exact path='/login' render={(props) => <Login {...props} email={this.state.email}
          password={this.state.password}
          handleChangeLogin={this.handleChangeLogin}
          handleLogin={this.handleLogin} />}      
        />
        <Route exact path='/about' render={(props) => <About {...props} toggleLogin={this.toggleLogin} loggedIn={this.state.loggedIn} />} />

        <Route exact path='/signup' render={(props) => <Login {...props} email={this.state.email}
          password={this.state.password}
          handleChangeLogin={this.handleChangeLogin}
          handleLogin={this.handleLogin} />}
        />
        <BottomNavigationBar/>
      </Router>

      // <Search 
      //   handleChange={this.handleChange}
      //   handleSubmit={this.handleSubmit}
      //   search={this.state.search}
      //   ></Search>
      
    );
  }
}

export default App;
