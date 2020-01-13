import React from "react";

const AppView = (props) => {
    const { students, removeStudent, addStudent } = props;

    const studentToAdd = {
        "id": 4,
        "firstName": "First",
        "lastName": "Last",
        "email": "bobbyshmurdabish123@yahoo.com",
        "gpa": 3.7
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
            {students.map(student => <div> Student Id: {student.id}, Name: {student.firstName} {student.lastName}, Gpa: {student.gpa}, Email: {student.email} </div>)}
        </header>
    </div>
    )
}

export default AppView;