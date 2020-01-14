import React, { Component } from 'react';

// Additional Redux store imports;
import { connect } from "react-redux";
import { fetchCampusesThunk, removeCampusThunk, addCampusThunk, editCampusThunk } from "../../store/utilities/campuses";
import AllCampusesView from './AllCampusesView';

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      //amount: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  removeCampus = (campusid) => {
    this.props.removeCampus(campusid);
  }

  addCampus = (campus) => {
    this.props.addCampus(campus);
  }

  editCampus = (campus) => {
    this.props.editCampus(campus);
  }

  render() {
    return (
        <AllCampusesView
            campuses={this.props.campuses} 
            removeCampus={this.removeCampus} 
            editCampus={this.editCampus}
        ></AllCampusesView>
    )
  }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
  return {
    campuses: state.campuses
  }
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
    removeCampus: (campusid) => dispatch(removeCampusThunk(campusid)),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))
  }
}

export default connect(mapState, mapDispatch)(AppContainer);