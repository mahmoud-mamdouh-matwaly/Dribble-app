import React, { Component } from "react";
import Card from "../card/Card";
import Button from "../button";
class Content extends Component {
  render() {
    return (
      <>
        <Card />
        <Button className="button button--backgroundcolor">
          Sign up to continue
        </Button>
        <Button className="button">or sign in</Button>
      </>
    );
  }
}

export default Content;
