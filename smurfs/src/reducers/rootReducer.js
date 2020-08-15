import { SMURF_LOADING, SMURF_SUCCESS, SMURF_FAILURE, ADD_SMURF } from '../actions/index';

// step 1. Set up the state! 
const initialState = {
    smurfs: [],  
    error: "" ,
    loading: false,
    formValues: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
}

export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case SMURF_LOADING:
            return {
                ...state, 
                loading: true, 
            }
        case SMURF_SUCCESS: 
            return {
                ...state, 
                loading: false, 
                smurfs: action.payload
            }
        case SMURF_FAILURE: 
            return {
                ...state,
                loading: false, 
                error: action.payload
            }
        case ADD_SMURF: 
            return {
                ...state,
                loading: false, 
                smurfs: action.payload
            }

            default:
                return state; 
    }
}

