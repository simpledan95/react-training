import React, { Component } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    alert("LOGGED YOU IN!");
    this.props.history.push("/food/salmon");
  }

  
  render() {
    const navigate = useNavigate()
    return (
      <div className='Navbar'>
        <button onClick={this.handleLogin}>Log In</button>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    );
  }
}
export default Navbar;
