import React from 'react';
import s from './SideDrawer.module.css';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Logo from './../../Logo/Logo';
import NavItems from './../NavigationItems/NavigationItems';
import Aux from './../../../hoc/Aux';



const SideDrawer = (props) => {

    let attachedClasses = [s.SideDrawer, s.Closed];
    if (props.open) {
        attachedClasses = [s.SideDrawer, s.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>

                <div className={s.LogoWrapper}>
                    <Logo></Logo>
                </div>

                <nav>
                    <NavItems
                        Authenticated={props.Auth}/>
                </nav>

            </div>
        </Aux>
    );
};

export default SideDrawer;