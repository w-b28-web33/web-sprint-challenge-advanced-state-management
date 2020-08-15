import { FETCH_SMURFS_START, 
        FETCH_SMURFS_SUCCESS, 
        POST_SMURF_START, 
        POST_SMURF_SUCCESS, 
        SMURF_FAILURE 
} from '../actions/index';

// step 1. Set up the state! 
const initialState = {
    smurfs: [],  
    error: "" ,
    isFetching: false,
    formValues: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START: 
            return {
                ...state, 
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, ...action.payload]
            };
            case POST_SMURF_START:
            return {
                ...state,
                smurfList: [...state.smurfList, state.formValues]
            };
            case POST_SMURF_SUCCESS:
                return {
                    ...state,
                    postSuccess: action.payload
                };
            case SMURF_FAILURE: 
                return {
                    ...state,
                    error: action.payload
                };           
            default:
                return state
    };
};

export default rootReducer;

