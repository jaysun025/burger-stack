import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default function(props)  {
// handle passed in props and state vals and functions
  return (
      <div>
        <BurgerStack burgerStack={props.burgerStack} />
        <ClearBurger clearBurger={props.clearBurger}/>
      </div>
    )
  }


