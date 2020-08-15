import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/index';

const Form = props => {
    
  const [smurf, setSmurf ] = useState({
    name: '', 
    age: '',
    height: '',
    id: Date.now()
  });


const handleChange = e => {
  setSmurf({...smurf,
    [e.target.name]: e.target.value
  }); 
}

const handleSubmit = e => {
  e.preventDefault(); 
  postSmurf(smurf)
}

  return(
    <form className="form" onSubmit={handleSubmit}>
      <h2>Smurf Town USA!</h2>

      <input 
        type='text'
        name='name' 
        placeholder="Smurf's Name?"
        onChange = {handleChange} 
        value={smurf.name}
      />

      <input 
        type='text'
        name='age' 
        placeholder="Smurf's age!" 
        onChange={handleChange} 
        value={smurf.age}
      />
      <input 
        type='text'
        name='height' 
        placeholder="'Smurf's Height?'" 
        onChange={handleChange} 
        value={smurf.height}
      />
      <button type="submit"> Add Your New Smurf </button>
    </form>
  );
};

export default connect(null, { postSmurf })(Form); 

// const [smurf, setSmurf] = useState({
//   name: "",
//   age: "",
//   height: "",
//   id: ""
// })