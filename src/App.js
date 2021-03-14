import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink 
            exact
            to="/"
            className="inline-block px-4 py-2"
            activeClassName="text-red-300"
            >Plants
          </NavLink>
          <NavLink
            exact
            to="/plants"
            className="inline-block px-4 py-2"
            activeClassName="text-red-300"
            >Today
          </NavLink>
          <NavLink
            exact
            to="/plants/new"
            className="inline-block px-4 py-2"
            activeClassName="text-red-300"
            >New Plant
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" >route 1</Route>
          <Route exact path="/plants" >route 2</Route>
          <Route exact path="/plants/:plantId" >route 3</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
