import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {

  render() {
    return (
      <div>	
     	<Typography variant="h1" component="h2" align="center">
      		Welcome
      	</Typography>
      </div>
    )
  }
}

export default HomePage;