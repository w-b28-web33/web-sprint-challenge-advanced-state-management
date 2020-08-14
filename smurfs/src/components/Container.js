import React from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';
// import { addSmurf } from './actions/index'

const Container = props => {
    console.log(props.name)
    return (
        <div>
            {props.smurfs.map(smurf => {
            return <SmurfCard smurf={smurf.name} age ={smurf.age} height={smurf.height} key={smurf.id} />
         })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    }
  }
  
  export default connect(mapStateToProps, { })(Container)