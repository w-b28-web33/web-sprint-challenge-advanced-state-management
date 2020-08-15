// import React from 'react';
// import { connect } from 'react-redux';
// import SmurfCard from './SmurfCard';
// import {postSmurf} from '../actions/index';


// const Container = props => {
//     console.log(props.name)
//     return (
//         <div>
//             {props.smurfs.map(user => { console.log(user.name)
//             return <SmurfCard smurf={props.user.name} age ={props.user.age} height={props.user.height} key={props.user.id} />
//          })}
//         </div>
//     )
// }
// const mapStateToProps = state => {
//     return {
//       smurfs: state.smurfs
//     }
//   }
  
//   export default connect(mapStateToProps, { addSmurf })(Container)