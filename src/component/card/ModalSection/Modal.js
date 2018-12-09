import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    closeButton: PropTypes.bool,
    overlayCloses: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    closeButton: true,
    overlayCloses: true,
    onClose: () => null
  };

  closeModal = () => {
    this.props.onClose();
  };

  render() {
    const { closeButton, overlayCloses } = this.props;

    return ReactDOM.createPortal(
      <div className="card__modal">
        <div className="card__modal__content ">
          {this.props.children}

          {closeButton && (
            <button onClick={this.closeModal}>
              <i className="fa fa-times" />
            </button>
          )}
        </div>

        <div
          className="card__modal__overlay"
          onClick={overlayCloses ? this.closeModal : () => null}
        />
      </div>,
      window.modals
    );
  }
}
export default Modal;
