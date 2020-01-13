// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const GET_STUDENT = "GET_STUDENT";

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
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

// THUNK CREATOR;
export const fetchStudentsThunk = () => (dispatch) => {
    const arrayOfStudentsFromAPI = [
        {
        "id": 1,
        "firstName": "Caitlin",
        "lastName": "Selca",
        "email": "caitlinselca@gmail.com",
        "gpa": 3.5
        },
        {
        "id": 2,
        "firstName": "Camryn",
        "lastName": "Buonamassa",
        "email": "someemailgoeshere@yahoo.com",
        "gpa": 3.8
        },
        {
        "id": 3,
        "firstName": "Naveed",
        "lastName": "Naqi",
        "email": "youremail@gmail.com",
        "gpa": 4.0
        }
    ]

    dispatch(fetchStudents(arrayOfStudentsFromAPI))
}

export const getStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = getStudent(id); 
    dispatch(resolvedActionObject);
}

export const removeStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = removeStudent(id); 
    dispatch(resolvedActionObject);
}

export const addStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = addStudent(student); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload;
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case ADD_STUDENT:
            return [...state, action.payload]
        case GET_STUDENT:
            return state.filter(student => student.id == action.payload);
        default:
            return state;
    }
}