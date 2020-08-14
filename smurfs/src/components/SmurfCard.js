import React from 'react';

const SmurfCard = props => {
    const { name, age, height, id }= props


    return (
        <div>
            <h2> {name} </h2>
            <p> {age} </p>
            <p> {height} </p>
            <p> {id} </p>
        </div>
        
    )
}

export default SmurfCard
