import React from 'react';
import "./App.css";
import AllStudentsContainer from './components/students/AllStudentsContainer';
import HomePage from './components/layout/HomePage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SingleStudent from './components/students/SingleStudent';

function App() {
  return (
      <Router>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/students" component={AllStudentsContainer}/>
          <Route exact path="/student/:id" component={SingleStudent}/>
      </Router>
  );
}

export default App;
