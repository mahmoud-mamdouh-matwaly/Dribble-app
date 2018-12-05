import React, { Component } from "react";

class CardImage extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <a className="card__owner__link" href={this.handleCard}>
          <img src="images/avater.png" alt="ownerImage" />
          <span>{name}</span>
        </a>
      </>
    );
  }
}

export default CardImage;
