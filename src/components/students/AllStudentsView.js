import React from 'react'
import CardView from "../layout/CardView";
import AddStudentForm from './AddStudentForm';
import axios from 'axios';

export default function AllStudentsView(props) {

    const { students, removeStudent, addStudent, editStudent } = props;

    const determineDisplay = (students) =>{
        if(students.length === 0){
            return (
                <div>
                    <p></p>
                    <AddStudentForm addStudent={addStudent}>
                    </AddStudentForm>
                    <h2 align="center"> No students </h2>
                </div>
            );
        }
        else{
            return(
                <div>
                    <p></p>
                    <AddStudentForm addStudent={addStudent}>
                    </AddStudentForm>
                    {students.map(student => {
                        return (
                            <CardView 
                                firstName={student.firstName}
                                lastName={student.lastName}
                                id={student.id}
                                year={student.year}
                                imageUrl={student.imageUrl}
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
    }

    let display = determineDisplay(students);
    return (
    <div> 
        {display}
    </div>
    );
}
