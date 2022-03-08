import React, { Component } from 'react'

export default class ComponentDidMount extends Component {

    constructor(){
        super();
        console.warn("constructor");
    }
    componentDidMount(){
        console.warn("componenntDidMount");
    }

  render() {
      console.warn("render");
    return (
      <div>
          <h2>Component Did Mount Life Cycle</h2>

      </div>
    )
  }
}
