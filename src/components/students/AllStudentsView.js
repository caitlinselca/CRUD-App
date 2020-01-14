import React from 'react'
import CardView from "../layout/CardView";
import FormDialog from './FormDialog';

export default function AllStudentsView(props) {

    const { students, removeStudent, addStudent, editStudent } = props;

    return (
        <div>
            <p></p>
            <FormDialog addStudent={addStudent}>
            </FormDialog>
            {students.map(student => {
                return (
                    <CardView 
                        title={`${student.firstName} ${student.lastName}`}
                        id={student.id}
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
