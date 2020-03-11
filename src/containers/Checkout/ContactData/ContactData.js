import React, { Component } from 'react';
import { connect } from 'react-redux';


import axios from './../../../axios-orders';
import Button from './../../../components/UI/Button/Button';
import s from './ContactData.module.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false 
    }

    orderHandler = event => {
        event.preventDefault();
        this.setState({ loading: true });
        
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            
        };
        axios
            .post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => this.setState({ loading: false }));
    };
   
    render() {
        return (
            <div className={s.ContactData}> 
                <h4>Enter your contact data</h4>
                <form>
                    <input className={s.Input} type='text' name='name' placeholder='Your name'/>
                    <input className={s.Input} type='text' name='email' placeholder='Your email' />
                    <input className={s.Input} type='text' name='street' placeholder='Street' />
                    <input className={s.Input} type='text' name='postalCode' placeholder='Postal code' />
                    <Button btnType='Success' clicked={this.orderHandler} >Order</Button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);

