class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 3
  }
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