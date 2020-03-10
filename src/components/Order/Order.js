import React from 'react';
import s from './Order.module.css';


const Order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            // same kind of transformation as in burger.js
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientOutput = ingredients.map(ig => { 
    return <span key={ig.name}>{ig.name} ({ig.amount})</span>   
    })

    return (
        <div className={s.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;

