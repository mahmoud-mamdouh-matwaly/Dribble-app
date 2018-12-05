import React, { Component } from "react";
import Button from "../../button";
import { connect } from "react-redux";
class CardAction extends Component {
  state = {
    counterView: 0,
    counterComment: 0,
    valueLike: 0
  };

  render() {
    const { counterView, counterComment } = this.state;
    return (
      <div className="card__action">
        <ul className="card__action-list">
          <li className="card__action-item">
            <Button>
              <img src="images/Exclude.png" alt="view users account" />
              <span>{counterView}</span>
              <span className="visually-hidden">view</span>
            </Button>
          </li>
          <li className="card__action-item">
            <Button>
              <img src="images/Union.png" alt="comment users account" />
              <span>{counterComment}</span>
              <span className="visually-hidden">comment</span>
            </Button>
          </li>
          <li className="card__action-item">
            <Button onClick={e => this.handleClickLike(e)}>
              <img src="images/Heart.png" alt="like users account" />
              <span>{this.props.value}</span>
              <span className="visually-hidden">like</span>
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateOfProps = state => {
  return {
    value: state.value.value
  };
};
export default connect(mapStateOfProps)(CardAction);
