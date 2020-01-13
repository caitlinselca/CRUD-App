import React from "react";

const AppView = (props) => {
    const { students, removeStudent, addStudent, campuses, removeCampus, addCampus } = props;

    const studentToAdd = {
        "id": 4,
        "firstName": "First",
        "lastName": "Last",
        "email": "bobbyshmurdabish123@yahoo.com",
        "gpa": 3.7
    }
    const campusToAdd = {
        "id": 1,
        "name": "Hunter College" 
    }

    return (
    <div className="App">
        <header className="App-header">
            <button
                className="search-button"
				onClick={() => addStudent(studentToAdd)}> Add Student </button>
             <button
                className="search-button"
				onClick={() => alert("You removed a student!")}> Remove Student </button>
              <button
                className="search-button"
				onClick={() => addCampus(campusToAdd)}> Add Campus </button>
             <button
                className="search-button"
				onClick={() => alert("You removed a campus!")}> Remove Campus </button>
            {students.map(student => <div> Student Id: {student.id}, Name: {student.firstName} {student.lastName}, Gpa: {student.gpa}, Email: {student.email} </div>)}
            {campuses.map(campus => <div> College Campus: {campus.name} </div>)}
        </header>
    </div>
    )
}

export default AppView;