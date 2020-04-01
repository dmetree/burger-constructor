import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import s from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

   
    render() {
        return (
            <Aux>
                <Toolbar 
                    Auth = {this.props.isAuth}
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    Auth={this.props.isAuth}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={s.Content}>
                    {this.props.children}
                </main>
            </Aux>

            
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);

