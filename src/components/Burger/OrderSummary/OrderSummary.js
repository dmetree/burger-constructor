import React from 'react';
import s from './OrderSummary.module.css';
// import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li className={s.Li} key={igKey}>
                <span className={s.Item}>{igKey}</span>: {props.ingredients[igKey]}
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
            <p>Continue to Checkout?</p>
            <button>Cancel</button>
            <button>Continue</button>
        </div>
    );
}

export default OrderSummary;

