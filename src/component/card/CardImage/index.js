import React, { Component } from "react";

import Modal from "../ModalSection";

import ModalSection from "../ModalSection/ModalSection";

class CardImage extends Component {
  state = {
    modalVisible: false
  };

  render() {
    const { modalVisible } = this.state;
    const { name, subTitle, urlPng, urlWeb, clicked, value } = this.props;

    return (
      <>
        <a
          className="card__image"
          href={this.handleCard}
          onClick={() => this.setState({ modalVisible: true })}
        >
          <span className="visually-hidden">{name}</span>
          <picture>
            <source srcSet={urlWeb} type="image/webp" />
            <img src={urlPng} alt={subTitle} />
          </picture>
        </a>
        {modalVisible && (
          <Modal
            overlayCloses={true}
            closeButton={true}
            onClose={() => this.setState({ modalVisible: false })}
          >
            <ModalSection
              urlWeb={urlWeb}
              urlPng={urlPng}
              name={name}
              subTitle={subTitle}
              click={clicked}
              value={value}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default CardImage;
