import React, {Component}from 'react'

export default class SingleStudent extends Component {


    render(){

        const id = this.props.match.params.id;
        
        return (
            <div>
                <h1>Single Student</h1>
                <p>{id}</p>
            </div>
        )
    }

}
