// Import view;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div>	
      	<div> THIS IS THE HOMEPAGE </div>
      	<div><Link to="/students">View All Students</Link></div>
      </div>
    )
  }
}

export default HomePage;