import axios from "axios";

// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const GET_STUDENT = "GET_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT"

// ACTION CREATOR;
const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}

const getStudent = (id) => {
    return {
        type: GET_STUDENT,
        payload: id
    }
}

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

const addStudent = (student) => {

    student.id = parseInt(student.id);

    return {
        type: ADD_STUDENT,
        payload: student
    }
}

const editStudent = (student) => {

    student.id = parseInt(student.id);

    return {
        type: EDIT_STUDENT,
        payload: student
    }
}

// THUNK CREATOR;
export const fetchStudentsThunk = () => (dispatch) => {

    axios.get("/api/students")
    .then(res => dispatch(fetchStudents(res.data)));
    
}

export const getStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = getStudent(id); 
    dispatch(resolvedActionObject);
}

export const editStudentThunk = (student) => (dispatch) => {

    axios.put("/api/students", student)
    .then(res => console.log(res.data))

    let resolvedActionObject = editStudent(student); 
    dispatch(resolvedActionObject);
}

export const removeStudentThunk = (id) => (dispatch) => {

    axios.delete("api/students/" + id)
    .then(res => console.log(res.data))

    let resolvedActionObject = removeStudent(id); 
    dispatch(resolvedActionObject);
}

export const addStudentThunk = (student) => (dispatch) => {
    axios.post("api/students", student)
    .then(res => console.log(res.data))

    let resolvedActionObject = addStudent(student); 
    dispatch(resolvedActionObject);
}


let initialState= []

// REDUCER FUNCTION;
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload;
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case ADD_STUDENT:
            return [...state, action.payload]
        case GET_STUDENT:
            return state.filter(student => student.id === parseInt(action.payload));
        case EDIT_STUDENT:
            return state.map(student => {
                if(student.id === action.payload.id) {
                    return action.payload
                }

                return student;
            });
        default:
            return state;
    }
}