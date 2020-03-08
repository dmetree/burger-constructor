import React from 'react';
import s from './CheckoutSummary.module.css';
import Burger from './../../Burger/Burger';
import Button from './../../UI/Button/Button';




const CheckoutSummary = (props) => {
    return (
        <div className={s.CheckoutSummary}>
            <h1>it tastes well</h1>
            <div className={s.Burger}>
                <Burger ingredients={props.ingredients} />
                <Button clicked={props.onCheckoutCancel} btnType='Danger'>Cancel</Button>
                <Button clicked={props.onCheckoutContinue} btnType='Success'>Continue</Button>
            </div>
        </div>
    );

};

export default CheckoutSummary;

