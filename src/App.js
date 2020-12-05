import React, { useState } from 'react';
import Burger from './components/Burger'
import IngredientList from './components/Ingredient'
import IngredientForm from './components/IngredientForm'
import "./css/App.css";

//we want to render the ingredients as soon as the user loads the page, thats why the array is inside app.js. which is the parent. 
const App = () => {

  const [items, setItems] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ])




  const addToIngredients = (newItem) => {
    setItems([newItem, ...items])
  }


  const [burger, setBurger] = useState([])

  const addItem = (event, newItem) => {
    event.preventDefault()
    console.log(newItem)
    console.log(burger)
    setBurger([newItem, ...burger])
  }


  const clearBurger = () => {
    console.log(clearBurger)
    setBurger([])
  }


  return (

    <div style={{ flexDirection: "row", justifyContent: 'center' }}>
      <h1> Ingredient List: </h1>
      <IngredientList items={items} addItem={addItem} burger={burger} />
      <Burger items={items} addItem={addItem} burger={burger} clearBurger={clearBurger} />
      <IngredientForm addToIngredients={addToIngredients} />
    </div>
  )
}




export default App;