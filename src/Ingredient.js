import React, { Component } from 'react'

export default function(props) {
    
        return (
            <p style= {{backgroundColor: props.color}} key= {props.key}>
                {props.ingredient}
            </p>
        )
    }


