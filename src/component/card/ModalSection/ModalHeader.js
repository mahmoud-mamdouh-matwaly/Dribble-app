import React, { Component } from "react";
import Button from "../../button";
import { connect } from "react-redux";
// import * as actionType from "../../../store/actions";
class ModalHeader extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="modal__header-head">
        <div className="modal__header-info">
          <img
            src="images/avater.png"
            alt="ownerimage"
            className="modal__header__avater"
          />
          <div className="modal__header--infoOwner">
            <h3>Pay Junction - Paper Receipts-1</h3>
            <p>
              by <a href={this.handleCard}>{name}</a>
              <time>August 20, 2018</time>
            </p>
          </div>
        </div>
        <div className="modal__header__action">
          <Button className="btn">save as</Button>
          <Button onClick={this.props.click} className="btn">
            {this.props.value ? (
              <>
                <i className="fas fa-heartbeat" /> unlike{" "}
              </>
            ) : (
              <>
                <i className="fas fa-heart" />
                like
              </>
            )}
          </Button>
          <p>{this.props.value}</p>
        </div>
      </div>
    );
  }
}
const mapStateOfProps = state => {
  return {
    value: state.value.value
  };
};

// const mapToDispatchOfProps = dispatch => {
//   return {
//     onLikeCounter: () =>
//       dispatch({
//         type: actionType.LIKE
//       })
//   };
// };
export default connect(mapStateOfProps)(ModalHeader);
