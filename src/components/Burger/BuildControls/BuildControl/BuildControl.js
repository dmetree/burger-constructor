import React from 'react';
import s from './BuildControl.module.css';

const BuildControl = (props) => (
    <div className={s.BuildControl}>
        <div className={s.Label}>{props.label}</div>
        <button className={s.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={s.More} onClick={props.added}>More</button>
    </div>
);

export default BuildControl;

