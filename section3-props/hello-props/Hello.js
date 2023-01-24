class Hello extends React.Component {
  render() {
    const props = this.props;
    let bangs = "!".repeat(props.bangs)
    return (
      <div>
        <p>Hi {props.to}! From {props.from}{bangs}</p>
        <img src={props.img}/>
      </div>
    )
  }
}