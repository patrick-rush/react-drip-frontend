import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // NavLink
} from 'react-router-dom';
import PlantPageContainer from './containers/PlantPageContainer';
// import { connect } from 'react-redux'
// import { manageNavigation } from './actions/page'
import NavigationContainer from './containers/NavigationContainer';
import NewPlantContainer from './containers/NewPlantContainer'; 
import TodayPageContainer from './containers/TodayPageContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={PlantPageContainer} ></Route>
          <Route exact path="/plants" component={PlantPageContainer} ></Route>
          <Route exact path="/plants/new" component={NewPlantContainer} ></Route>
          <Route exact path="/plants/:plantId" component={PlantPageContainer} ></Route>
          <Route exact path="/events" component={TodayPageContainer} ></Route>
          <Route exact path="/events/:eventId" component={TodayPageContainer} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
