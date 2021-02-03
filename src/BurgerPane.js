import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
// handle passed in props and state vals and functions

  render() {
    return (
      <div>
        <BurgerStack burgerIngredients={this.props.burgerIngredients} />
        <ClearBurger />
      </div>
    )
  }
}

export default BurgerPane