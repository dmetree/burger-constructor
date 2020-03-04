import React from 'react';
import s from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
    <div
        className={s.DrawerToggle}
        onClick={props.clicked}>
        MENU
    </div>
);

export default DrawerToggle;