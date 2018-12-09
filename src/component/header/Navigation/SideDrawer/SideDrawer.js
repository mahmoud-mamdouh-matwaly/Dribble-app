import React from "react";
import Logo from "../../../Logo/Logo";
import Backdrop from "../Backdrop/backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import Search from "../Search/Search";
import "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo />
        <Search />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
