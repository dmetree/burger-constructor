import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Aux from './hoc/Aux';
import gs from './App.module.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Login from './containers/Auth/Login';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    let routs = (
      <Aux>
        <Route path='/' component={Layout} />
        <Route path='/auth' component={Auth} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={BurgerBuilder} />
        <Redirect to='/' />
      </Aux>
    );

    if (this.props.isAuthenticated) {
      routs = (
        <Aux>
          <Route path='/' component={Layout} />
          <Route exact path='/' component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
          <Route exact path='/orders' component={Orders} />
          <Route path='/logout' component={Logout} />
          <Redirect to='/' />
        </Aux>
      );
    }

    return (
      <div className={gs.App}>
        {routs}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
// withRouter
export default connect(mapStateToProps, mapDispatchToProps)(App);
