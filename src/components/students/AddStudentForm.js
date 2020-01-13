import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddStudentForm(props) {

    const [state, setState] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        gpa: 0
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addStudent(state);
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.id]: (event.target.value)})
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <TextField
                  required
                  label="ID"
                  variant="filled"

                  id="id"
                  type="number"
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="First Name"
                  variant="filled"

                  id="firstName"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="Last Name"
                  variant="filled"

                  id="lastName"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="Email"
                  variant="filled"

                  id="email"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="GPA"
                  variant="filled"

                  id="gpa"
                  type="text"
                  onChange={handleChange}
                />
                <Button variant="contained" color="primary" size="small">Add Student</Button>
            </form>

        </div>
    )
}
