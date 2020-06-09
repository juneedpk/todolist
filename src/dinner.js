import React from 'react';


function Dinner(props) {

    return (
        <div>
             <h1>Today menu is {props.dishName}</h1>
             <h1>Today our sweet dish  is {props.sweetDish}</h1>
        </div>
    )
}

export default Dinner;