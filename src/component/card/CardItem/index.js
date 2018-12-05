import React, { Component } from "react";
import CardAction from "../CardAction";
import CardImage from "../CardImage";

class CardItem extends Component {
  render() {
    const { ...card } = this.props;
    return (
      <>
        <CardImage {...card} />
        <CardAction name={card.name} />
      </>
    );
  }
}

export default CardItem;
