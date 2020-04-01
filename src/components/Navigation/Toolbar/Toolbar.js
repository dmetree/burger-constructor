import React from 'react';
import s from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className={s.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo></Logo>
        <nav className={s.DesktopOnly}>
            <ul>
               <NavigationItems
               Authenticated = {props.Auth}/>
            </ul>
        </nav>
    </header>
);

export default Toolbar