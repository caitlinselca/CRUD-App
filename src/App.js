import React from 'react';
import "./App.css";
import {AllStudentsContainer, SingleStudent} from './components/students/';
import HomePage from './components/layout/HomePage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import AllCampusesContainer from './components/campuses/AllCampusesContainer';

function App() {
  return (
      <Router>
      	  <Route path="/" component={Navbar} />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/students" component={AllStudentsContainer}/>
          <Route exact path="/campuses" component={AllCampusesContainer}/>
          <Route exact path="/student/:id" component={SingleStudent}/>
          <Route exact path="/campus/:id" component={SingleStudent}/>
      </Router>
  );
}

export default App;
