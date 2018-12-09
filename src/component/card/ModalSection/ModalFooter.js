import React, { Component } from "react";

import Button from "../../button";
import CardAction from "../CardAction/CardAction";

class ModalFooter extends Component {
  render() {
    return (
      <>
        <div className="modal__content__comment">
          <p>
            Hey guys, here’s a sneak peak of my work in progress I was happy
            everyone got to see my last work and commented so much.I’ll be sure
            to keep you updated
          </p>
          <div className="modal__content__response">
            <h3>Responses</h3>
            <div className="modal--response__comment">
              <img src="images/Avater.png" alt="ownerimage" />
              <div className="modal--response__comment__type">
                <h4>ahmed</h4>
                <p>
                  Ahmed like what you did with this place, I like what you did
                  with this place, I’m not sure what to do about that part. what
                  do you think?
                </p>
                <div className="modal--response__comment__action">
                  <time>August, 20 2018</time>
                  <a href={this.handleCard}>
                    <img src="images/Heart.png" alt="like" />
                    <span className="visually-hidden">like</span>
                    <span>132</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__content__action">
          <Button className="btn">
            <i className="fas fa-paperclip" />
            Copy Link
          </Button>
          <CardAction />
        </div>
      </>
    );
  }
}

export default ModalFooter;
