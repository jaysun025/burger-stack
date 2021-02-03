import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    render () {
// call .map on our past props array and render 
// an ingredient component for each item.
let burgerIngredients = this.props.burgerIngredients.reverse().map((item, index) => (
    <Ingredient ingredient={item} key={`keyB${index}`} />
))
        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
    }
}

export default BurgerStack