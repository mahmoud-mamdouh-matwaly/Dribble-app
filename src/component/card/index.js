import React, { Component } from "react";
import CardItem from "./CardItem";
import CardOwner from "./CardOwner";
import { connect } from "react-redux";
import * as actionType from "../../store/actions";

import "./card.css";
class Card extends Component {
  CreateList = () => {
    return this.props.users.map((card, index) => {
      return (
        <li className="card" key={index}>
          <div className="card__item">
            <CardItem {...card} clicked={this.props.onLikeCounter} />
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
    users: state.users
  };
};
const mapToDispatchOfProps = dispatch => {
  return {
    onLikeCounter: () =>
      dispatch({
        type: actionType.LIKE
      })
  };
};
export default connect(
  mapStateOfProps,
  mapToDispatchOfProps
)(Card);
