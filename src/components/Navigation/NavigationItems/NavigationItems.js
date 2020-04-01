import React from 'react';
import s from './NavigationItems.module.css';
import NavItem from './NavigatonItem/NavigationItem';

const NavItems = (props) => (
    <ul className={s.NavigationItems}>
        <NavItem link='/' >Burger Builder</NavItem>
        {props.Authenticated 
            ? <NavItem link='/orders'>Orders</NavItem>
            : null
        }
        {props.Authenticated 
            ? <NavItem link='/logout'>Logout</NavItem>
            : <NavItem link='/auth'>Login | SignUp</NavItem>
        }
       
    </ul>
);

export default NavItems