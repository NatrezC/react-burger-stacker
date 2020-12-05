import React, { useState } from 'react';
import BurgerStack from './BurgerStack'




const Burger = (props) => {

    return (
        <div style={{ border: '3px solid blue', width: '30%', marginLeft: '500px' }}>
            <BurgerStack burger={props.burger} clearBurger={props.clearBurger} />
        </div>
    )
}



export default Burger