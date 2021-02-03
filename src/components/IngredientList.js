import React, { Component } from 'react'

let IngredientList = (props) => {
    return (
        <div>
        {props.ingredients.map((ingredient) => {
          return (
              <div>
              <p>{ingredient.name}</p>
              <button>Add</button>
              </div>
          )
        })}
        </div>
    )
}

export default IngredientList