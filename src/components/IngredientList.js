import React, { Component } from 'react'

let IngredientList = (props) => {
    return (
        <div>
        {props.ingredients.map((ingredient) => {
          return  <p>{ingredient.name}</p>
        })}
        </div>
    )
}

export default IngredientList