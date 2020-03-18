import React from 'react';
import s from './Button.module.css';

const Button = (props) => (
    <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={[s.Button, s[props.btnType]].join(' ')}>{props.children}
    </button>
);


export default Button;

