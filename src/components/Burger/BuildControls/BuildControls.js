import React from 'react';
import s from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheeese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Tomato', type: 'tomato'}
];

const BuildControls = (props) => (
    <div className={s.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)} 
                removed={() => props.ingredientRemoved(ctrl.type)} 
                disabled = {props.disabled[ctrl.type]}
                />
        ))}
    </div>
);

export default BuildControls;

