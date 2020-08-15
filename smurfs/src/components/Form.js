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
    // setSmurf({
    //   name: "",
    //   age: "",
    //   height: "",
    //   id: ""
    // })
  };

  return(
    <form className="form">
      <h2>Smurf Town USA!</h2>

      <input 
        type='text'
        name='name' 
        placeholder="'What is your Smurf's Name?"
        onChange={onNameInputChange} 
        value={values.name}
      />

      <input 
        type='text'
        name='age' 
        placeholder="Enter Your Smurf's age!" 
        onChange={onAgeInputChange} 
        value={values.age}
      />
      <input 
        type='text'
        name='height' 
        placeholder='How Tall is Your Smurf?' 
        onChange={onHeightInputChange} 
        value={values.height}
      />
      <button onClick={onSubmit}> Add Your New Smurf </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    values: state.formValues
  };
};



export default connect(mapStateToProps, { onNameInputChange, onAgeInputChange, onHeightInputChange, postSmurf })(Form);

// const [smurf, setSmurf] = useState({
//   name: "",
//   age: "",
//   height: "",
//   id: ""
// })