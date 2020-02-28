import React from 'react';
import s from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheeese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Tomato', type: 'tomato' }
];

const BuildControls = (props) => (
    <div className={s.BuildControls}>
        <p>This burger will cost: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={s.OrderButton}
            disabled={props.price < 4.1}
        >ORDER NOW</button>
    </div>
);

export default BuildControls;

