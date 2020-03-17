import React, { Component } from 'react';
// import Input from '';
import Button from './../../components/UI/Button/Button';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 7
                },
                valid: false,
                touched: false
            }
        }
    }

    render () {
        return (
            <div>
                <from>

                </from>
                <Button>Done</Button>     
            </div>
        ); 
    }
} 
export default Auth;