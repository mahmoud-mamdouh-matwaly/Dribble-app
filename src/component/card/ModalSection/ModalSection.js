import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import { connect } from "react-redux";
class ModalSection extends Component {
  render() {
    const { name, subTitle, urlPng, urlWeb, click } = this.props;
    console.log(this.props);

    return (
      <>
        <div className="modal__box">
          <header className="modal__header">
            <ModalHeader name={name} click={click} />
          </header>
          <div className="modal__banner">
            <div className="modal__banner__image">
              <picture>
                <source srcSet={urlWeb} type="image/webp" />
                <img src={urlPng} alt={subTitle} />
              </picture>
            </div>
          </div>
          <div className="modal__content">
            <ModalFooter val={this.props.value} />
          </div>
        </div>
      </>
    );
  }
}
const mapStateOfProps = state => {
  return {
    value: state.value.value
  };
};
export default connect(mapStateOfProps)(ModalSection);
