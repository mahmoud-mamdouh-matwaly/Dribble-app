import React, { Component } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";
class NavigationItems extends Component {
  render() {
    return (
      <ul className="NavigationItems">
        <NavigationItem>dribbles</NavigationItem>
        <NavigationItem>buckets</NavigationItem>
        <NavigationItem>users</NavigationItem>
        <NavigationItem>lists</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;
