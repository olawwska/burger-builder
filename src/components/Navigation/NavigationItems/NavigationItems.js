import React from "react";

import classes from "./NavigationItems.css";

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
            <a h ref={props.link} className={props.active ? classes.active : null}>
                {" "}
                Burger Builder
            </a>
        </li>
    </ul>
);

export default NavigationItems;
