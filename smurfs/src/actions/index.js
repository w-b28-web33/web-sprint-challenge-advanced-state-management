import axios from 'axios'; 


export const FETCH_SMURFS_START = "FETCH_SMURF_START"; 
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURF_SUCCESS"; 
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const SMURF_FAILURE = "SMURF_FAILURE;"


export const ON_NAME_INPUT = 'ON_NAME_INPUT';
export const ON_AGE_INPUT = 'ON_AGE_INPUT';
export const ON_HEIGHT_INPUT = 'ON_HEIGHT_INPUT'


export const fetchSmurfs = () => {
        return dispatch => {
            dispatch({ type: FETCH_SMURFS_START });
            axios
                .get('http://localhost:3333/smurfs')

                .then(res => {
                    //  console.log(res.data)
                    dispatch({ type: FETCH_SMURFS_START, payload: res.data })
            })
                .catch(err => dispatch({ type: SMURF_FAILURE, payload: err.message}))
        }
    }

export const postSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: POST_SMURF_START });
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then( res => {
                console.log(res.data)
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => dispatch({ type: SMURF_FAILURE, payload: err.message}))
        }
    }

export const onNameInputChange = e => {
    e.preventDefault();
    return {
        type: ON_NAME_INPUT,
        payload: e
    };
};

export const onAgeInputChange = e => {
    e.preventDefault();
    return {
        type: ON_AGE_INPUT,
        payload: e
    };
};

export const onHeightInputChange = e => {
    e.preventDefault();
    return {
        type: ON_HEIGHT_INPUT,
        payload: e
    };
};



