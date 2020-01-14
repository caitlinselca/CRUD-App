// ACTION TYPES;
const FETCH_CAMPUSES = "FETCH_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const GET_CAMPUS = "GET_CAMPUS";

// ACTION CREATOR;
const fetchCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}

const getCampus = (id) => {
    return {
        type: GET_CAMPUS,
        payload: id
    }
}

const removeCampus = (campusid) => {
    return {
        type: REMOVE_CAMPUS,
        payload: campusid
    }
}

const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

let initialState = [
    {
    "id": 2,
    "name": "Baruch"
    },
    {
    "id": 3,
    "name": "City College"
    },
]

// THUNK CREATOR;
export const fetchCampusesThunk = () => (dispatch) => {
    dispatch(fetchCampuses(initialState))
}


export const getCampusThunk = (id) => (dispatch) => {
    let resolvedActionObject = getCampus(id); 
    dispatch(resolvedActionObject);
}

export const removeCampusThunk = (campusid) => (dispatch) => {
    let resolvedActionObject = removeCampus(campusid); 
    dispatch(resolvedActionObject);
}

export const addCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = addCampus(campus); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case ADD_CAMPUS:
            return [...state, action.payload]
        case GET_CAMPUS:
            return state.filter(campus => campus.id === parseInt(action.payload));
        default:
            return state;
    }
}