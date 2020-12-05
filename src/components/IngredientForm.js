import React, { useState } from 'react';


const IngredientForm = ({ addToIngredients }) => {

    const handleSubmit = event => {
        event.preventDefault()
        addToIngredients({
            name: event.target[0].value,
            color: event.target[1].value,
        })
    }
    return (
        <>
            <p>What else would you like?</p>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="ingredient" />
                <input name="color" placeholder="color" />
                <button onSubmit={handleSubmit}>Add Ingredient</button>
            </form>

        </>
    )
}



export default IngredientForm