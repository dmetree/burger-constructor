import React from 'react';
import s from './NavigationItem.module.css';

const NavItem = (props) => (
    <li className={s.NavigationItem}><a 
    href={props.link}
    className={props.active ? s.active : null }>{props.children}</a></li>
);

export default NavItem