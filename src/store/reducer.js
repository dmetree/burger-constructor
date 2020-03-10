import * as actionTypes from './actions';

const initialState = {

    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
        tomato: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.2,
    bacon: .7,
    tomato: .6
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;




// axios.get('https://react-burger-70ff3.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log('Error')
        //     });



// this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Bondarenko D',
        //         address: {
        //             street: 'Test',
        //             zipCode: '111111',
        //             planet: 'Earth'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'

        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //         console.log('There was an error')
        //     });
