import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import s from './ContactData.module.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
    }
   
    render() {
        return (
            <div> className={s.ContactData}
                <h4>Enter your contact data</h4>
                <from>
                    <input className={s.Input} type='text' name='name' placeholder='Your name'/>
                    <input className={s.Input} type='text' name='email' placeholder='Your email' />
                    <input className={s.Input} type='text' name='street' placeholder='Street' />
                    <input className={s.Input} type='text' name='postalCode' placeholder='Postal code' />
                    <Button btnType='Success' clicked={this.orderHandler} >Order</Button>
                </from>
            </div>
        )
    }
}
export default ContactData;

