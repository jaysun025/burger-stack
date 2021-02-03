import './App.css';
import IngredientList from './components/IngredientList'
import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import ClearBurger from './components/ClearBurger'

class BurgerStacker extends Component{
  constructor() {
    super()
  this.state =  { 
    ingredients: [ 
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
  ],
  burgerArray: []
}

this.addFood = () => {
  let tempFood = this.state.ingredArray
  tempFood.push(this.state.newFood)
}

this.clearFood = (e) => {
  e.preventDefault()
  console.log('clicked')
  this.setState({burgerArray: []})
}

  }
  render() {
  return (
    <form>
      <BurgerPane />
      <ClearBurger clearFood={this.clearFood}/>
      <IngredientList ingredients={this.state.ingredients} />
    </form>
  )
}
}

export default BurgerStacker;
