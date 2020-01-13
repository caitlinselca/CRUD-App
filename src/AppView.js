import React from "react";

const AppView = (props) => {
    const { students, removeStudent, addStudent, campuses, removeCampus, addCampus } = props;

    const studentToAdd = {
        "id": 2,
        "firstName": "bob",
        "lastName": "jones",
        "email": "bobbyboy1234@yahoo.com",
        "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
        "gpa": 3.7,
        "createdAt": "2018-12-05T23:02:45.270Z",
        "updatedAt": "2019-06-14T00:15:35.429Z",
        "campusId": 1
    }
    const campusToAdd = {
        "id": 1,
        "name": "Hunter College" 
    }

    return (
    <div className="App">
        <header className="App-header">
            {students.map(student => <div>{student.firstName} </div>)}
            {campuses.map(campus => <div>{campus.name} </div>)}
        </header>
    </div>
    )
}

export default AppView;