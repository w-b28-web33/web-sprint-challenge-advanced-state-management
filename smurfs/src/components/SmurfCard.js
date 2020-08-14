import React from 'react';
import { connect } from 'react-redux';

function SmurfCard(props) {
    const { name, age, height, id } = props.user


    return (
        <div>
            <h2> {name} </h2>
            <p> {age} </p>
            <p> {height} </p>
            <p> {id} </p>
        </div>
        
    )
}


export default connect(null, {})(SmurfCard)
