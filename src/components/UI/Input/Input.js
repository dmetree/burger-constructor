import React from 'react';
import s from './Input.module.css';

const Input = (props) => {
    
    let inputElement = null;
    const inputClasses = [s.InputElement];

    if (props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(s.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    let validationError = null;
    if (props.invalid && props.shouldValidate && props.touched){
        validationError = <p>That doesn't look valid!</p>   
    }
    

    return (
        <div className={s.Input}>
            <label className={s.Label}> {props.label} </label>
            {inputElement}
            {validationError}
        </div>
    );
};


export default Input;

