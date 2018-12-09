import React, { Component } from "react";
import CardAction from "../CardAction/CardAction";
import CardImage from "../CardImage/CardImage";

class CardItem extends Component {
  render() {
    const { ...card } = this.props;
    return (
      <>
        <CardImage {...card} />
        <CardAction name={card.name} value={card.likeCount} />
      </>
    );
  }
}

export default CardItem;
