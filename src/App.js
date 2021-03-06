import React, { useEffect, useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

function App() {

    const [ingredientList, setIngredientList] = useState([
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ])
  
    const [burgerStack, setBurgerStack] = useState([])

      console.log(ingredientList)

      

    const addToBurger = (item) => {
        console.log('add to burger')
        setBurgerStack(burgerStack.concat(item))
    }

    const clearBurger = (e) => {
        setBurgerStack([])
    }

    
        return (
            <div style={{display: 'flex'}}>
                <IngredientList ingredients={ingredientList} addToBurger={addToBurger} />
                <BurgerPane burgerStack={burgerStack} clearBurger={clearBurger} />
            </div>
        )
    }

  


export default App;
