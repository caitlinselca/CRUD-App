import React from 'react'
import CardView from "../layout/CardView";
import AddStudentForm from './AddStudentForm';

export default function AllStudentsView(props) {

    const { students, removeStudent, addStudent, editStudent } = props;

    return (
        <div>

            <AddStudentForm addStudent={addStudent}></AddStudentForm>

            {students.map(student => {
                return (
                    <CardView 
                        title={`${student.firstName} ${student.lastName}`}
                        id={student.id}
                        variant="student"
                        removeStudent={removeStudent}
                        editStudent={editStudent}
                    ></CardView>
                );
            })}
        </div>
    )
}
