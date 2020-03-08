import React, { Component } from 'react';
import s from './Checkout.module.css';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from "react-router-dom";


class Checkout extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 1,
            meat: 1,
            salad: 1,
            tomato: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ ingredients: ingredients })
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    ckeckoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div className={s.Checkout}>
                <CheckoutSummary
                    onCheckoutCancel={this.checkoutCancelHandler}
                    onCheckoutContinue={this.ckeckoutContinueHandler}
                    ingredients={this.state.ingredients} />
                <Route path={this.props.match.path + '/contact-data'} 
                render={() => (
                    <ContactData ingredients={this.state.ingredients}/>
                )} />

            </div>
        );
    }
}

export default Checkout;
