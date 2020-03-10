import React, { Component } from 'react';
import { connect } from 'react-redux';

import s from './BurgerBuilder.module.css';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from './../../axios-orders';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import Aux from './../../hoc/Aux';
import * as actionTypes from './../../store/actions';



class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }
    backdropHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }



    render() {
        //      Disabling buttons if 0
        //      Converting value pairs to  ||  key: true 
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        

        let burger = <Spinner />
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.props.price}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                continue={this.purchaseContinueHandler}
                cancel={this.backdropHandler}
                price={this.props.price} />
        }


        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <div className={s.bb}>
                
                <Modal show={this.state.purchasing} modalClosed={this.backdropHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients, 
        price: state.totalPrice
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(withErrorHandler(BurgerBuilder, axios));