import React, { Component } from "react";
import CardItem from "./CardItem";
import CardOwner from "./CardOwner";
import { connect } from "react-redux";

import "./card.css";

class Card extends Component {
  CreateList = () => {
    return this.props.users.map((card, index) => {
      return (
        <li className="card" key={card.id}>
          <div className="card__item">
            <CardItem {...card} val={this.props.value} />
          </div>
          <div className="card__owner">
            <CardOwner name={card.name} />
          </div>
        </li>
      );
    });
  };
  render() {
    return (
      <>
        <ul className="list__card">{this.CreateList()}</ul>
      </>
    );
  }
}
const mapStateOfProps = state => {
  return {
    users: state.users,
    value: state.value.value
  };
};

export default connect(mapStateOfProps)(Card);
