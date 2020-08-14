import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS" // as GET
export const ADD_SMURF = "ADD_SMURF"      // as POST

export const addSmurf = apiData => {
    return {
        type: ADD_SMURF,
        payload: apiData
    }
};

export const fetchSmurfs = _ => dispatch => {
    axios   
        .get("http://localhost:3333/smurfs")
        .then( response => {
            console.log("Fetching data from api", response.data)
            })
        .catch(err => console.error(err.message))
    }


    export const postNewSmurf = apiData => dispatch => {
        axios
          .post("http://localhost:3333/smurfs", apiData)
          .then(
            console.log(smurfData)
          )
      
      }
      
      axios.post()