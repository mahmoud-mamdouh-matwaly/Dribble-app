import React, { Component } from "react";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import "./Requister.css";
class Requister extends Component {
  render() {
    return (
      <ul className="NavigationItems Requister">
        <NavigationItem>sign up</NavigationItem>
        <NavigationItem>sign in</NavigationItem>
      </ul>
    );
  }
}

export default Requister;
