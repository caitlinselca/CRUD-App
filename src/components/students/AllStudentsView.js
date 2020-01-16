import React from 'react'
import CardView from "../layout/CardView";
import AddStudentForm from './AddStudentForm';
import axios from 'axios';

export default function AllStudentsView(props) {

    const { students, removeStudent, addStudent, editStudent } = props;
    let campus = "";

    return (
        <div>
            <p></p>
            <AddStudentForm addStudent={addStudent}>
            </AddStudentForm>
            {students.map( (student) => {
                return (
                    <CardView 
                        firstName={student.firstName}
                        lastName={student.lastName}
                        id={student.id}
                        campus={campus}
                        email={student.email}
                        gpa={student.gpa}
                        variant="student"
                        removeStudent={removeStudent}
                        editStudent={editStudent}
                    ></CardView>
                );
            })}
        </div>
    )
}
