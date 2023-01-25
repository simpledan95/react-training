import React, { Component } from 'react';

// This example is showing that you don't need constructors or need to bind the function to "this"
// since it is implicitly happening with the arrow function
class BrokenClick2 extends Component {
  state = { clicked: false }
  handleClick = (e) => {
    this.setState({clicked: true })
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default BrokenClick2;