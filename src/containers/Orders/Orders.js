import React, { Component } from 'react';
import s from './Orders.module.css';
import Order from './../../components/Order/Order';
import axios from './../../axios-orders';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';




class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                        // Turning firebase keys into ids
                    });
                }
                console.log(res.data)
                this.setState({ loading: false, orders: fetchedOrders })
            })
            .catch(err => {
                this.setState({ loading: false })
            });
    }

    render() {
        return (
            <div className={s.Orders}>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>
        );
    }
}



export default withErrorHandler(Orders, axios);
