import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../../Logo/Logo";
import Requister from "../Requister/Requister";
import SearchIn from "../Search/Search";
import "./Toolbar.css";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="Toolbar__menu">
      <Logo />
      <div className="DesktopOnly">
        <SearchIn />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </div>
    <Requister />
  </header>
);

export default toolbar;
