import React, {Component}from 'react'
import { connect } from "react-redux";
import { getStudentThunk, fetchStudentsThunk } from "../../store/utilities/students";
import AvatarPic from "../layout/Avatar.js"
import Avatar from '@material-ui/core/Avatar';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';

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

        let myStudent = {};

        for(let i = 0; i < this.props.students.length; i++) {

            if(this.props.students[i].id === parseInt(id)) {
                myStudent = this.props.students[i];
                break;
            }
        }

        this.setState({
            currStudent: myStudent
        });
    }


    render(){

        return (
            <div>
                <h1 className="singlestudenttitle">{this.state.currStudent.firstName} {this.state.currStudent.lastName}</h1>
                <div className="image"><AvatarPic></AvatarPic></div>
                <ListItem className="info">
                <ListItemAvatar className="avatar">
                    <Avatar>
                        <FingerprintIcon />
                    </Avatar>
                </ListItemAvatar>
                    <ListItemText primary="ID" secondary={this.state.currStudent.id} />
                </ListItem>
                <ListItem className="info">
                <ListItemAvatar className="avatar">
                    <Avatar>
                        <EmailIcon />
                    </Avatar>
                </ListItemAvatar>
                    <ListItemText primary="Email" secondary={this.state.currStudent.email} />
                </ListItem>
                <ListItem className="info">
                <ListItemAvatar className="avatar">
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                    <ListItemText primary="GPA" secondary={this.state.currStudent.gpa} />
                </ListItem>

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
