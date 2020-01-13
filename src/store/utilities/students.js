// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";

// ACTION CREATOR;
const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
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
        "id": 4,
        "firstName": "Jerry",
        "lastName": "Jingle",
        "email": "jerryjingle@bells.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusId": 3
        },
        {
        "id": 6,
        "firstName": "Barry",
        "lastName": "Huang",
        "email": "someemailgoeshere@yahoo.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-06T20:04:04.275Z",
        "updatedAt": "2018-12-06T20:04:04.275Z",
        "campusId": 1
        },
        {
        "id": 1,
        "firstName": "justin",
        "lastName": "mintzer",
        "email": "mintzer.justin@gmail.com",
        "imageUrl": "https://i.imgur.com/N9Koe2G.jpg",
        "gpa": 4,
        "createdAt": "2018-12-05T23:02:45.257Z",
        "updatedAt": "2018-12-05T23:02:45.257Z",
        "campusId": 1
        },
        {
        "id": 24,
        "firstName": "first",
        "lastName": "LAST",
        "email": "email@email.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-10T04:50:33.677Z",
        "updatedAt": "2018-12-10T04:50:33.677Z",
        "campusId": null
        },
        {
        "id": 2,
        "firstName": "bob",
        "lastName": "jones",
        "email": "bobbyboy1234@yahoo.com",
        "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
        "gpa": 3.7,
        "createdAt": "2018-12-05T23:02:45.270Z",
        "updatedAt": "2019-06-14T00:15:35.429Z",
        "campusId": 1
        }
    ]

    dispatch(fetchStudents(arrayOfStudentsFromAPI))
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
        default:
            return state;
    }
}