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
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import withAuth from './withAuth';
import './index.css'

function App() {
  return (
    <div className="App bg-white">
      <Router>
        <NavigationContainer />
        <Switch>
          {/* <Route exact path="/" component={TodayPageContainer} ></Route> */}
          <Route exact path="/"><Welcome info="We're glad you're here" sillyMessage="Log In or Sign Up to get started!" /></Route>
          <Route exact path="/events" component={withAuth(TodayPageContainer)} ></Route>
          <Route path="/events/:eventId" component={withAuth(TodayPageContainer)} ></Route>
          <Route exact path="/plants" component={withAuth(PlantPageContainer)} ></Route>
          <Route path="/plants/new" component={withAuth(NewPlantContainer)} ></Route>
          <Route exact path="/plants/edit/:plantId" component={withAuth(EditPlantContainer)} ></Route>
          <Route exact path="/plants/:plantId" component={withAuth(PlantPageContainer)} ></Route>
          <Route exact path="/signup" component={Signup} ></Route>
          <Route exact path="/login" component={Login} ></Route>
          <Route path ="/*" ><Welcome info="Your plants are gonna miss you" sillyMessage="Better hit that back button" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
