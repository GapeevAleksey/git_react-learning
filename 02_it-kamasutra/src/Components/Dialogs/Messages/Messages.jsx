import React from 'react';
import s from './Messages.module.css';

const Message = (props) => {
  return (
    <div className={s.messagesItems}>
      {props.textArray.map((item, index) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default Message;
