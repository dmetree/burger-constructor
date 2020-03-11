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
                <Button
                    btnType="Danger"
                    clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>
        </div>
    );

};

export default CheckoutSummary;

