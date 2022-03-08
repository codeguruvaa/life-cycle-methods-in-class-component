import React from 'react';

export default class componentDidUpdate extends React.Component {

constructor(){
    super();
    this.state={
        counter:0
    }
}    
componentDidUpdate(){
    console.warn("method called")
}
  render() {
    return (
      <div>
          <h2>Component Did Update Life Cycle Methods</h2>
          <h1>{this.state.counter}</h1>
          <button onClick={()=>this.setState({counter:this.state.counter+1})}>
              Update Counter
          </button>

      </div>
    )
  }
}
