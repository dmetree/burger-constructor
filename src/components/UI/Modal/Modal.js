import React from 'react';
import s from './Modal.module.css';
import Aux from './../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
// import Backdrop from './../Backdrop/Backdrop';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={s.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                visibility: props.show ? 'visible' : 'hidden'
            }}>
            {props.children}
        </div>
    </Aux>
);


export default Modal;

