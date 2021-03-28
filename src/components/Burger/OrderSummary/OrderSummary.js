import React from "react";
import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => (
        <li key={igKey}>
            {igKey}: {props.ingredients[igKey]}
        </li>
    ));
    // <li>Salad: 1</li>;

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default OrderSummary;
