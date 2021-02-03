import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render () {
// take array of props and use .map 
        let ingredientComponents = this.props.ingredients.map((item, index) => (
            <Ingredient addToBurger={this.props.addToBurger} ingredient={item.name} color={item.color} key={`key${index}`} />
        ))

        return (
            <ul>
               {ingredientComponents}
            </ul>
        )
    }
}

export default IngredientList