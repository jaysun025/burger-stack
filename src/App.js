import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const ingredients = [
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
  ]


class App extends Component{
    state = {
        burgerIngredients: []
    }

    addToBurger = (e) => {
        let currentBurger = this.state.burgerIngredients
        // craete an object with name and color properties that collect vals from 
        // e.target
        let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
        // push object to current burger array
        currentBurger.push(newIngredient)
        // set state of burger ingredients to currentBurger


       

        this.setState({
            burgerIngredients: currentBurger
        })
    }

    clearBurger = (e) => {
        this.setState({
            burgerIngredients: []
        })
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <IngredientList ingredients={ingredients} addToBurger={this.addToBurger} />
                <BurgerPane burgerIngredients={this.state.burgerIngredients} clearBurger={this.clearBurger} />
            </div>
        )
    }
}    


export default App;
