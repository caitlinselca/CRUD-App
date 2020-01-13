import React from 'react';
import "./App.css";
import AllStudentsContainer from './components/students/AllStudentsContainer';
import HomePage from './components/layout/HomePage'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/students" component={AllStudentsContainer}/>
      </Router>
  );
}

export default App;
