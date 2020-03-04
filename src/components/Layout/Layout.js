import React from 'react';
import Aux from './../../hoc/Aux'
import Toolbar from './../Navigation/Toolbar/Toolbar';

import s from './Layout.module.css';

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={s.Content}>
            {/* (props.children) */}
        </main>
    </Aux>
);

export default Layout;

