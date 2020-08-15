import React from 'react';
import { connect } from 'react-redux';
import { postSmurf,  onNameInputChange, 
  onAgeInputChange,onHeightInputChange } from '../actions/index';

const Form = ({values, postSmurf, onNameInputChange, 
        onAgeInputChange,onHeightInputChange 
        }) => {
    
  const onSubmit = e => {
    e.preventDefault();
    postSmurf(values);
  };

  return(
    <form className="form">
      <h2>Smurf Town USA!</h2>

      <input 
        type='text'
        name='name' 
        placeholder="Smurf's Name?"
        onChange={(e)=> onNameInputChange(e.target.value)} 
        value={values.name}
      />

      <input 
        type='text'
        name='age' 
        placeholder="Smurf's age!" 
        onChange={(e)=> onAgeInputChange(e.target.value)} 
        value={values.age}
      />
      <input 
        type='text'
        name='height' 
        placeholder="'Smurf's Height?'" 
        onChange={(e)=> onHeightInputChange(e.target.value)} 
        value={values.height}
      />
      <button onClick={onSubmit}> Add Your New Smurf </button>
    </form>
  );
};

const mapStateToProps = state => {
  console.log(state.formValues)
  return {
    values: state.formValues
  };
};



export default connect(mapStateToProps, 
  { onNameInputChange, onAgeInputChange, onHeightInputChange, postSmurf })(Form);

// const [smurf, setSmurf] = useState({
//   name: "",
//   age: "",
//   height: "",
//   id: ""
// })