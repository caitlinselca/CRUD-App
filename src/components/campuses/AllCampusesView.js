import React from 'react'
import CampusCardView from '../layout/CampusCardView';
import AddCampusForm from './AddCampusForm';

export default function AllCampusesView(props) {

    const { campuses, removeCampus, addCampus } = props;

    return (
        <div>
            <p></p>
            <AddCampusForm addCampus={addCampus}/>
            {campuses.map(campus => {
                return (
                    <CampusCardView 
                        name={campus.name}
                        id={campus.id}
                        variant="campus"
                        removeCampus={removeCampus}
                    ></CampusCardView>
                );
            })}
        </div>
    )
}
