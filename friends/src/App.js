import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>User Page</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path='/protected' component={FriendsList} />
          <Route path="/login" component={Login} />
          <Redirect path="/login" />
        </Switch>
      </div>
    </Router>
  )  
}

export default App;
