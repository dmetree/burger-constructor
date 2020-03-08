import React from 'react';
import s from './NavigationItems.module.css';
import NavItem from './NavigatonItem/NavigationItem';

const NavItems = () => (
    <ul className={s.NavigationItems}>
        <NavItem link='/' >Burger Builder</NavItem>
        <NavItem link='/orders'>Orders</NavItem>
    </ul>
);

export default NavItems