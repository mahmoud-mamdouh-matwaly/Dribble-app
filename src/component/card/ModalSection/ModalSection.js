import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
class ModalSection extends Component {
  render() {
    const { name, subTitle, urlPng, urlWeb, click, id, value } = this.props;
    return (
      <>
        <div className="modal__box">
          <header className="modal__header">
            <ModalHeader name={name} id={id} click={click} value={value} />
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
// const mapStateOfProps = state => {
//   return {
//     value: state.value.value
//   };
// };
export default ModalSection;
