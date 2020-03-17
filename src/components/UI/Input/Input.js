import React from 'react';
import s from './Input.module.css';

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={s.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('textarea'):
            inputElement = <textarea className={s.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('select'):
            inputElement = (
                <select
                    className={s.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={s.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={s.Input}>
            <label className={s.Label}> {props.label} </label>
            {inputElement}
        </div>
    );
};


export default Input;

