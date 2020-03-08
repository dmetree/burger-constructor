import React from 'react';
import s from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => (
    <li className={s.NavigationItem}>
        <NavLink
            to={props.link}
            exact
            activeClassName={s.active}>{props.children}
        </NavLink>
    </li>
);

export default NavItem