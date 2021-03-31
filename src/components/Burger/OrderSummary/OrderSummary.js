import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => (
        <li key={igKey}>
            {igKey}: {props.ingredients[igKey]}
        </li>
    ));

    return (
        <Aux>
            <p>Total price: {props.price}</p>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default OrderSummary;
