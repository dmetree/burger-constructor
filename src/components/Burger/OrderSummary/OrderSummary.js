import React from 'react';
import s from './OrderSummary.module.css';
import Button from './../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li className={s.Li} key={igKey}>
                    <div className={s.Item}>{igKey}:</div> <div>{props.ingredients[igKey]}</div>
                </li>
            );
        });
    return (
        <div className={s.OrderSummary}>
            <h3>Your order</h3>
            <p>A Burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>The total is: <strong>${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>

            <Button clicked={props.cancel} btnType='Danger'>Cancel</Button>
            <Button clicked={props.continue} btnType='Success'>Continue</Button>
        </div>
    );
}

export default OrderSummary;

