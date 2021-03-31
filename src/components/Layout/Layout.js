import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const Layout = (props) => (
    <Aux>
        <NavigationItems />
        <Toolbar />
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;
