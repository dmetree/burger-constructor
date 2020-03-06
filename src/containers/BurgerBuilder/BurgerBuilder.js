import React, { Component } from 'react';
import s from './BurgerBuilder.module.css';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from './../../axios-orders';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import Aux from './../../hoc/Aux';

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.2,
    bacon: .7,
    tomato: .6
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://react-burger-70ff3.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
                console.log(response);
            })
            .catch(error => {
                console.log('Error')
            });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
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
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Bondarenko D',
                address: {
                    street: 'Test',
                    zipCode: '111111',
                    planet: 'Earth'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'

        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
                console.log('There was an error')
            });
    }



    render() {
        //      Disabling buttons if 0
        //      Converting value pairs to  ||  key: true 
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
       

        

        let burger = <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                continue={this.purchaseContinueHandler}
                cancel={this.backdropHandler}
                price={this.state.totalPrice} />
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

export default withErrorHandler(BurgerBuilder, axios);