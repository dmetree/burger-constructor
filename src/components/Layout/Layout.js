import React from 'react';
import Aux from './../../hoc/Aux'
import s from './Layout.module.css';

const Layout = (props) => (
    <Aux>
        <div className={s.navigation}>
            ToolBar, SideDrawer, BackDrop
        </div>
        <main>
            {/* (props.children) */}
        </main>
    </Aux>
);

export default Layout;

