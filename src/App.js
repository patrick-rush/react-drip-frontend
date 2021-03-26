import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PlantPageContainer from './containers/plants/PlantPageContainer';
import NavigationContainer from './containers/page/NavigationContainer';
import NewPlantContainer from './containers/plants/NewPlantContainer'; 
import TodayPageContainer from './containers/events/TodayPageContainer';
import EditPlantContainer from './containers/plants/EditPlantContainer';
import Welcome from './components/page/Welcome';
import withAuth from './withAuth';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={TodayPageContainer} ></Route>
          <Route exact path="/events" component={TodayPageContainer} ></Route>
          <Route path="/events/:eventId" component={TodayPageContainer} ></Route>
          <Route exact path="/plants" component={PlantPageContainer} ></Route>
          <Route path="/plants/new" component={NewPlantContainer} ></Route>
          <Route exact path="/plants/edit/:plantId" component={EditPlantContainer} ></Route>
          <Route exact path="/plants/:plantId" component={PlantPageContainer} ></Route>
          <Route path ="/*" ><Welcome info="Your plants are gonna miss you" sillyMessage="Better hit that back button" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuth(App);
