import React, {Component}from 'react'
import { connect } from "react-redux";
import { getStudentThunk, fetchStudentsThunk } from "../../store/utilities/students";

class SingleStudent extends Component {

    constructor(props) {
        super(props);

        this.state ={
            currStudent: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchAllStudents();

        console.log(id);
        console.log(this.props.students)

        let myStudent = {};

        for(let i = 0; i < this.props.students.length; i++) {

            if(this.props.students[i].id === parseInt(id)) {
                myStudent = this.props.students[i];
                console.log("PLEASE");
            }
        }

        this.setState({
            currStudent: myStudent
        });
    }


    render(){
        return (
            <div>
                <h1>Single Student</h1>
                <p> {this.state.currStudent.firstName}</p>
            </div>
        )
    }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {

    return {
      students: state.students,
    }
  }
  
  // Declaration for mapDispatchToProps;
  // The keys in this returned object will be on your component's `props` object as well;
  // The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
  const mapDispatch = (dispatch) => {
    return {
      getStudent: (id) => dispatch(getStudentThunk(id)),
      fetchAllStudents: () => dispatch(fetchStudentsThunk())
    }
  }
  
  export default connect(mapState, mapDispatch)(SingleStudent);
