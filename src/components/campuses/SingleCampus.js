import React, {Component}from 'react'
import { connect } from "react-redux";
import { getCampusThunk, fetchCampusesThunk } from "../../store/utilities/campuses";
import AvatarPic from "../layout/Avatar.js"
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SchoolIcon from '@material-ui/icons/School';

class SingleCampus extends Component {

    constructor(props) {
        super(props);

        this.state ={
            currCampus: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchAllCampuses();

        let myCampus = {};

        for(let i = 0; i < this.props.campuses.length; i++) {

            if(this.props.campuses[i].id === parseInt(id)) {
                myCampus = this.props.campuses[i];
                break;
            }
        }

        this.setState({
            currCampus: myCampus
        });
    }


    render(){

        return (
            <div>
                <h1 className="singlestudenttitle">{this.state.currCampus.name}</h1>
                <div className="image"><AvatarPic></AvatarPic></div>
                <ListItem className="info">
                <ListItemAvatar className="avatar">
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                    <ListItemText primary="ID" secondary={this.state.currCampus.id} />
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
      campuses: state.campuses,
    }
  }
  
  // Declaration for mapDispatchToProps;
  // The keys in this returned object will be on your component's `props` object as well;
  // The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
  const mapDispatch = (dispatch) => {
    return {
      getCampus: (id) => dispatch(getCampusThunk(id)),
      fetchAllCampuses: () => dispatch(fetchCampusesThunk())
    }
  }
  
  export default connect(mapState, mapDispatch)(SingleCampus);
