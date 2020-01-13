// ACTION TYPES;
const FETCH_CAMPUSES = "FETCH_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";

// ACTION CREATOR;
const fetchCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}

const removeCampus = (id) => {
    return {
        type: REMOVE_CAMPUS,
        payload: id
    }
}

const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

// THUNK CREATOR;
export const fetchCampusesThunk = () => (dispatch) => {
    const arrayOfCampusesFromAPI = [
        {
        "id": 2,
        "name": "Baruch"
        },
        {
        "id": 3,
        "name": "City College"
        },
    ]

    dispatch(fetchCampuses(arrayOfCampusesFromAPI))
}

export const removeCampusThunk = (id) => (dispatch) => {
    let resolvedActionObject = removeCampus(id); 
    dispatch(resolvedActionObject);
}

export const addCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = addCampus(campus); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case ADD_CAMPUS:
            return [...state, action.payload]
        default:
            return state;
    }
}