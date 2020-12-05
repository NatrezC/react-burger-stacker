import React, { useState } from 'react';
import Ingredient from './Ingredient'






const IngredientList = (props) => {
    return (
        <div style={{ border: '3px solid red', width: '30%' }}>
            <Ingredient items={props.items} addItem={props.addItem} />

        </div>
    )
}




export default IngredientList
