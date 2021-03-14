import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import PageContainer from './containers/PageContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="bg-green-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink 
                      exact
                      to="/"
                      className="hover:bg-green-700 hover:text-white bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="text-green-100 bg-green-900"
                      >Plants
                    </NavLink>
                    <NavLink
                      exact
                      to="/plants"
                      className="hover:bg-green-700 hover:text-white bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="text-green-100 bg-green-900"
                      >Today
                    </NavLink>
                    <NavLink
                      exact
                      to="/plants/new"
                      className="hover:bg-green-700 hover:text-white bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="text-green-100 bg-green-900"
                      >New Plant
                    </NavLink>
                  </div>
                </div>  
              </div>
            </div>
          </div>  
        </nav>
        <Switch>
          <Route exact path="/" component={PageContainer}></Route>
          <Route exact path="/plants" >route 2</Route>
          <Route exact path="/plants/:plantId" >route 3</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
