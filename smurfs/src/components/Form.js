import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const Form = props => {
    
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  })

 

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.addSmurf(smurf)
    setSmurf({
      name: "",
      age: "",
      height: "",
      id: ""
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input name='name' placeholder='name' onChange={handleChange} value={props.name}/>
      <input name='age' placeholder='age' onChange={handleChange} value={props.age}/>
      <input name='height' placeholder='height' onChange={handleChange} value={props.height}/>
      <button type='submit'> Add Smurf </button>
    </form>
  )
}
const mapStateToProps = state => {
  return state
}



export default connect(mapStateToProps, { addSmurf })(Form)