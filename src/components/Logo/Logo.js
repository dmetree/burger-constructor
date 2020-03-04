import React from 'react';
import BurgerLogo from './../../assets/img/logo.png';
import s from './Logo.module.css';

const Logo = () =>(
    <div className={s.Logo}>
        <img src={BurgerLogo} alt="BurgerLogo"/>
    </div>
);

export default Logo