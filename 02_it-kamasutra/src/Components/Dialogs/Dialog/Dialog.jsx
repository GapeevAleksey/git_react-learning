import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
  const path = `/dialogs/${props.name}`;
  return (
    <div className={s.dialogsItems}>
      <NavLink to={path}>
        <img src={props.userpic} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
