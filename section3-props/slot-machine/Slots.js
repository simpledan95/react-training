class Slots extends React.Component {
  render() {
    const {s1,s2,s3} = this.props
    let msg;
    let winner;
    if ((s1 === s2) && (s2 === s3) && (s1 === s3)) {
        msg = "You Win!" 
        winner = true}
    else { 
      msg = "You Lose!"
      winner = false
    }

    const colors = winner === true ? {fontSize: '50px', backgroundColor: 'purple'} : null
    return (
      <div>
        <p style={colors}>{s1} {s2} {s3}</p>
        <p>{msg}</p>
      </div>
    )
  }
}