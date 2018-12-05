import React, { Component } from "react";
import "./NavigationItem";
class NavigationItem extends Component {
  render() {
    return (
      <li className="NavigationItem">
        <a href=",amhsd">{this.props.children}</a>
      </li>
    );
  }
}

export default NavigationItem;
