class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Ringo" 
          from="Paul" 
          bangs={4}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNrcynu1ms2BtdxMYtIPBnQbyuDO7qBKpAnEU8fIG&s"
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))