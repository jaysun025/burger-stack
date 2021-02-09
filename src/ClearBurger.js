import React, { Component } from 'react'

export default function(props) {
    
        return (
            <button onClick={(e) => props.clearBurger(e)}>Clear Burger Stack</button>
        )
    }


