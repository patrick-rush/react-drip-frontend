import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // NavLink
} from 'react-router-dom';
import PageContainer from './containers/PageContainer';
// import { connect } from 'react-redux'
// import { manageNavigation } from './actions/page'
import NavigationContainer from './containers/NavigationContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={PageContainer}></Route>
          <Route exact path="/plants" >route 2</Route>
          <Route exact path="/plants/new">New Plant</Route>
          <Route exact path="/plants/:plantId" component={PageContainer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
