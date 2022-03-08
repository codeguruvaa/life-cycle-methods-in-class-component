import React from 'react'

export default class ComponenetWillUnmount extends React.Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

  render() {
    return (
      <div>

          <h2>Component Will Unmount</h2>
          {this.state.show ? <Child /> : null }

          <button onClick={()=>this.setState({show:!this.state.show})}>
            Toggle Child
          </button>  

      </div>
    )
  }
}

class Child extends React.Component {
    componentWillUnmount(){
        console.warn("Component is hidden now")
    }
    render() {
      return (
        <div>
            <h3>Child Component</h3>
  
        </div>
      )
    }
  }
