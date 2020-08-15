import React from 'react';
import { connect } from 'react-redux';

const SmurfCard = props => {
   


    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>           
            <p>Height: {props.smurf.height}</p>
        </div>
        
    )
}


export default SmurfCard;
