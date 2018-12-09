import React, { Component } from "react";
import CardItem from "./CardItem/CardItem";
import CardOwner from "./CardOwner/CardOwner";
import { connect } from "react-redux";

import "./card.css";

class Card extends Component {
  CreateList = () => {
    let data = this.props.data;

    return data.map(card => {
      return (
        <li className="card" key={card.id}>
          <div className="card__item">
            <CardItem {...card} />
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
  console.log(state.data);
  return {
    data: state.data.data
  };
};

export default connect(mapStateOfProps)(Card);
