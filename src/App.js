import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'
import Protected from './components/Protected';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

const firebaseConfig = {
  apiKey: "AIzaSyDRzN8YDet8kRfdqRYaQb6yc9nWtGpNm8I",
  authDomain: "roiers.firebaseapp.com",
  projectId: "roiers",
  storageBucket: "roiers.appspot.com",
  messagingSenderId: "343579369435",
  appId: "1:343579369435:web:b68eed9295ad1b58a191fe"
};

firebase.initializeApp(firebaseConfig);


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: {},
      email: ""
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState = (user, email) => {  // Updating state when user logs in to /protected
    this.setState({
      user,
      email,
      loggedIn: true
    });
  }

  handleLogout = () => {  // used as a prop to /protected
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.setState({
          user: {},
        loggedIn: false,
          email: ""
        })
    }).catch((error) => {
      console.log(error);
    });
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path="/" render={props => <Login {...props} firebase={firebase}/>} />
          <Route exact path="/register" render={props => <Register {...props} firebase={firebase}/>} />
          <ProtectedRoute exact path="/protected" handleLogout={this.handleLogout} component={Protected} updateState={this.updateState} />
          <Route exact path="/unauthorized" component={Unauthorized} />
        </Router>
      </div>
    );
  }
}

export default App;
