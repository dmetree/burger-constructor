import React from 'react';
import s from './NavigationItems.module.css';
import NavItem from './NavigatonItem/NavigationItem';
import Aux from './../../../hoc/Aux';

const NavItems = (props) => (
    <ul className={s.NavigationItems}>
        <NavItem link='/' >Burger Builder</NavItem>
        {props.Authenticated
            ? <NavItem link='/orders'>Orders</NavItem>
            : null
        }
        {props.Authenticated
            ? 
            <NavItem link='/logout'>Logout</NavItem>
            : 
            <Aux>
                <NavItem link='/login'>Log In</NavItem>
                <NavItem link='/auth'>Sign Up</NavItem>
            </Aux>
        }

    </ul>
);

export default NavItems