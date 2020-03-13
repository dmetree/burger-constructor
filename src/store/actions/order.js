import * as actionTypes from './actionTypes';
import axios from './../../axios-orders';



export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';


export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};


export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const pruchaseBurgerStart = () => {
    return { 
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const pruchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(pruchaseBurgerStart());
        axios.post("/orders.json", orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};