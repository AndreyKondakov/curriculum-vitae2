import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { condition: false, icon: false };
    this.handleClick = this.handleClick.bind(this);
    this.iconClick = this.iconClick.bind(this);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }

  iconClick() {
    this.setState({
      icon: !this.state.icon
    });
  }

  render() {
    return (
      <header id="header">
        <div id="header-content">
          <div id="header-logo">
            <h1 className="logo">Kondakov</h1>
          </div>
          <nav id="header-nav" role="navigation" className={this.state.condition ? "is-visible" : "is-hidden"}>
            <ul className="nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/resume'>Resume</Link></li>
              <li><Link to='/skills'>Skills</Link></li>
              <li><Link to='/contacts'>Contact me</Link></li>
            </ul>
          </nav>
          <div id="header-nav-toggle" onClick={ this.handleClick }  >
            <div id="nav-icon3" onClick={ this.iconClick } className={this.state.icon ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;