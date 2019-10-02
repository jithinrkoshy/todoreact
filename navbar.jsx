import React, { Component } from "react";
import './navbar.css';

import logo from './logonav.png';

class CustomNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

  const show = (this.state.menu) ? "show" : "" ;

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-bg">
    <a className="navbar-brand nav-logo" href="/">
          <img src={logo} alt="logo" height="30"/>
    </a>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="/">Contact</a>
          <a className="nav-item nav-link" href="/">About</a>
        </div>
      </div>
    </nav>
    <br />
    
       
  
    </div>    

  );
  }
}

export default CustomNav;