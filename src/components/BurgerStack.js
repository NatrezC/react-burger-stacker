import React, { useState } from 'react';


const BurgerStack = (props) => {



    return (
        <div>
            <ul>
                {props.burger.map((item, index) => {
                    return (
                        <li key={index} style={{ backgroundColor: `${item.color}` }}>
                            {item.name}
                        </li>
                    )
                }
                )}
            </ul>
            <button onClick={(event) => { { props.clearBurger(event) } }}>Delete Burger</button>
        </div>
    )
}




export default BurgerStack