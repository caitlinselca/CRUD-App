import React, { Component } from 'react';
import './App.css';

// Import view;
import AppView from "./AppView";

// Additional Redux store imports;
import { connect } from "react-redux";
import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";
import { fetchCampusesThunk, removeCampusThunk, addCampusThunk } from "./store/utilities/campuses";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      //amount: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  removeStudent = (id) => {
    this.props.removeStudent(id);
  }

  addStudent = (student) => {
    this.props.addStudent(student);
  }

  removeCampus = (campusid) => {
    this.props.removeCampus(campusid);
  }

  addCampus = (campus) => {
    this.props.addCampus(campus);
  }

  render() {
    return (
      <AppView students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} campuses={this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus} />
    )
  }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: (id) => dispatch(removeStudentThunk(id)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
    removeCampus: (campusid) => dispatch(removeCampusThunk(campusid)),
    addCampus: (campus) => dispatch(addCampusThunk(campus))
  }
}

export default connect(mapState, mapDispatch)(AppContainer);