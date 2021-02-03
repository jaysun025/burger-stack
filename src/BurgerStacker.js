import './App.css';
import IngredientList from './components/IngredientList'
import React, { Component } from 'react'
import BurgerPane from './BurgerPane'

class BurgerStacker extends Component{
  constructor() {
    super()
  this.state =  { ingredients: [ 
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
}

this.addFood = () => {
  let tempFood = this.state.ingredArray
  tempFood.push(this.state.newFood)
}

this.clearFood = () => {
  this.setState({ingredArray: []})
}

  }
  render() {
  return (
    <form>
      <BurgerPane />
      <IngredientList ingredients={this.state.ingredients} />
      <button onClick={this.clearfood}>Clear Burger</button>
    </form>
  )
}
}

export default BurgerStacker;
