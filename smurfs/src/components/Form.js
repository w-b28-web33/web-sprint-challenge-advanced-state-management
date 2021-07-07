import React, { useState } from 'react';


const Form = props => {
    
  const [smurf, setSmurf ] = useState({
    name: '', 
    age: '',
    height: '',
    id: Date.now()
  });


const handleChanges = e => {
  setSmurf({...smurf,
    [e.target.name]: e.target.value
  }); 
}

const handleSubmit = e => {
  e.preventDefault();
  props.addSmurf(smurf);
  setSmurf({
      name: "",
      age: "",
      height:""
  });
};

  return(
    <form className="form" onSubmit={handleSubmit}>
      <h2>Smurf Town USA!</h2>

      <input 
        type='text'
        name='name' 
        placeholder="Smurf's Name?"
        onChange = {handleChanges} 
        value={smurf.name}
      />

      <input 
        type='text'
        name='age' 
        placeholder="Smurf's age!" 
        onChange={handleChanges} 
        value={smurf.age}
      />
      <input 
        type='text'
        name='height' 
        placeholder="'Smurf's Height?'" 
        onChange={handleChanges} 
        value={smurf.height}
      />
      <button className="submitButton" type="submit"> Add New Smurf </button>
    </form>
  );
};
export default Form;

// const [smurf, setSmurf] = useState({
//   name: "",
//   age: "",
//   height: "",
//   id: ""
// })