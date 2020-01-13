import React, {useState} from 'react'

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
                <input 
                    type="text" 
                    id="id" 
                    placeholder="ID" 
                    onChange={handleChange}
                ></input>

                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    onChange={handleChange}
                ></input>

                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    onChange={handleChange}
                ></input>

                <input 
                    type="text" 
                    id="email" 
                    placeholder="Email" 
                    onChange={handleChange}
                ></input>

                <input 
                    type="text" 
                    id="gpa" 
                    placeholder="GPA" 
                    onChange={handleChange}
                ></input>

                <button> Add Student</button>
            </form>

        </div>

    )
}
