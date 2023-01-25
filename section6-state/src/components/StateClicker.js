import React, { Component } from 'react';

class StateClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      winner: false,
    }
  }

  handleClick = (e) => {
    let rand = Math.floor(Math.random() * this.props.n)
    this.setState({num: rand})
    if (rand === 7 ) {
      this.setState({winner: true})
    }
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.winner ? <h1>YOU WIN!</h1> : <button onClick={this.handleClick}>Random Number</button>}
      </div>
    )
  }
}

export default StateClicker;