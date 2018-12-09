import React, { Component } from "react";
import Footer from "./component/footer/footer";
import Content from "./component/content/content";
import Header from "./component/header/Layout/Layout";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
