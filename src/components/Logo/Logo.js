import React from "react";
import burgerLogo from "../../assets/burger-logo.png";
import classes from "../Logo/Logo.css";

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"></img>
    </div>
);

export default Logo;
