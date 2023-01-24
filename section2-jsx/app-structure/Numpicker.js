function getNum() {
  return Math.floor(Math.random() * 10) + 1
}
class NumPicker extends React.Component {
  render () {
    const num = getNum()
    let msg;
    
    if (num === 7) {
      msg = 
        <div>
          <h2>CONGRATS YOU WIN!</h2>
          <img src="https://media.tenor.com/uHrMA6HIKrwAAAAd/bh187-woo.gif"/>
        </div>
    } else {
      msg = <p>Sorry You Lose!</p>
    }

    return (
      <div>
        <h1>Your number is {num}</h1>
        {msg}
      </div>
    )
  }
}