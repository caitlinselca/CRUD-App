import React from 'react';
import "./App.css";
import {AllStudentsContainer, SingleStudent} from './components/students/';
import {AllCampusesContainer, SingleCampus} from './components/campuses/';
import HomePage from './components/layout/HomePage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'

function App() {
  return (
      <Router>
      	  <Route path="/" component={Navbar} />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/students" component={AllStudentsContainer}/>
          <Route exact path="/campuses" component={AllCampusesContainer}/>
          <Route exact path="/student/:id" component={SingleStudent}/>
          <Route exact path="/campus/:id" component={SingleCampus}/>
      </Router>
  );
}

export default App;
