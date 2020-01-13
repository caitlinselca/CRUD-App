import React from "react";
import CardView from "./components/layout/CardView";

const AppView = (props) => {
    const { students, removeStudent, addStudent, campuses, removeCampus, addCampus } = props;

    const studentToAdd = {
        "id": 4,
        "firstName": "First",
        "lastName": "Last",
        "email": "bobbyshmurdabish123@yahoo.com",
        "gpa": 3.7
    }

    const studentToRemove = {
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
    <div>
        <header>
            <div className="App">
                <button
                    onClick={() => addStudent(studentToAdd)}
                > 
                    Add Student 

                </button>

                <button
                    onClick={() => removeStudent(studentToRemove.id)}
                > 
                Remove Student 
                </button>

            </div>

            {students.map(student => {
                return (
                    <CardView title={student.firstName}></CardView>
                );
            })}
        </header>
    </div>
    )
}

export default AppView;