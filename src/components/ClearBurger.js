import React, { Component } from 'react'   

class ClearBurger extends Component{
    render() {
        return (
            <button onClick={this.props.clearFood}>Clear Burger</button>
        )
    }
}

export default ClearBurger