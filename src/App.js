import React from 'react';
import './App.css';
import './scss/application.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignUp from './screens/SignUp/index.js';
import Login from './screens/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign_up">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
