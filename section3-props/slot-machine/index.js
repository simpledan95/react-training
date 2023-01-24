class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!!</h1>
        <Slots s1="z" s2="z" s3="z"/>
        <Slots s1="x" s2="x" s3="x"/>
        <Slots s1="y" s2="x" s3="y"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))