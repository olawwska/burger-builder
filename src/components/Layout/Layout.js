import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true,
    };

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    };

    render() {
        return (
            <Aux>
                <NavigationItems />
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    onClick={this.sideDrawerCloseHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
