import React from 'react';
import s from './NavigationItems.module.css';
import NavItem from './NavigatonItem/NavigationItem';

const NavItems = () => (
    <ul className={s.NavigationItems}>
        <NavItem link='/' active >Burger Builder</NavItem>
        <NavItem link='/'>Checkout</NavItem>
    </ul>
);

export default NavItems