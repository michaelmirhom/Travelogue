import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import TripList from './components/TripList/TripList';
import TripDetails from './components/TripDetails/TripDetails';
import DestinationList from './components/DestinationList/DestinationList';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
function App() {
  return (
    <Router>
      <div>
       
        <nav style={{ padding: '1rem', borderBottom: '1px solid gray' }}>
          <Link to="/dashboard" style={{ margin: '0 1rem' }}>Dashboard</Link>
          <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
          <Link to="/signup" style={{ margin: '0 1rem' }}>Signup</Link>
          <Link to="/trips" style={{ margin: '0 1rem' }}>Trips</Link>
          <Link to="/destinations" style={{ margin: '0 1rem' }}>Destinations</Link>
        </nav>
        <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
           
           <Route path="/trips" exact component={TripList} />
     

export default App;






         





