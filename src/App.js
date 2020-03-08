import React, { Component } from 'react';
import gs from './App.module.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { Route } from "react-router-dom";


class App extends Component {


  render() {

    return (
      <div className={gs.App}>
        <Route path='/' component={ Layout } />
        <Route exact path='/' component={ BurgerBuilder } />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/orders' component={Orders} />
        
      </div>
    );
  }
}

export default App;
