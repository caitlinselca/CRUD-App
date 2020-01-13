import React from 'react'
import CardView from "../layout/CardView";

export default function AllStudentsView(props) {

    const { students, removeStudent, addStudent} = props;

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

    return (
        <div>
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
                    <CardView 
                        title={`${student.firstName} ${student.lastName}`}
                        id={student.id}
                        variant="student"
                    ></CardView>
                );
            })}
        </div>
    )
}
