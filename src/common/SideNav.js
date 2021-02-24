import { Component } from "react";
import NavItem from "./NavItem";

class SideNav extends Component {
  state = { activeNavItem: "" }; 

  handleNavItemOnClick = (item) => {
    if(this.state.activeNavItem.length > 0 ){
      document.getElementById(this.state.activeNavItem).classList.remove('active');
    }
    this.setState({activeNavItem: item }, () => {
      document.getElementById(item).classList.add('active')
    });
  };
  
  render() {
    return (
      <nav className="sidenav">
        <ul>
          <NavItem
            item="Home"
            tolink="/"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="About"
            tolink="/About"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Education"
            tolink="/Education"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Skills"
            tolink="/Skills"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Contact"
            tolink="/contact"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
        </ul>
      </nav>
    );
  }
}
export default SideNav;

