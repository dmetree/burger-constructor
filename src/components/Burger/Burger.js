import React from 'react';
import s from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        // Transform an object on key: value / pairs into keys and values.
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type = {igKey} />
        }); // [ a , b ]
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Add some ingredients</p>;
    }
    // console.log(transformedIngredients);
    
    return (
        <div className={s.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default Burger