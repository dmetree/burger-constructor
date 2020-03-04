import React from 'react';
import s from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';

const Toolbar = (props) => (
    <header className={s.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <nav className={s.DesktopOnly}>
            <ul>
               <NavigationItems/>
            </ul>
        </nav>
    </header>
);

export default Toolbar