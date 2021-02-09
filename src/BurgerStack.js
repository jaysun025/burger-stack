import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default function(props) {
    
// call .map on our past props array and render 
// an ingredient component for each item.
let burgerIngredients = props.burgerIngredients && props.burgerIngredients.reverse().map((item, index) => (
    <li>
        <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`} />
    </li>
))
        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
    }

