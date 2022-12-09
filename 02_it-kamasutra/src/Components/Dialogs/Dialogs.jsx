import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Messages/Messages';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../Redux/dialogs-reducer';

const Dialogs = (props) => {
  let state = props.store.getState();
  const dialogsElements = state.dialogsPage.dialogsList.map((item) => {
    return <Dialog id={item.id} name={item.name} userpic={item.userpic} key={item.id} />;
  });
  const messagesElements = state.dialogsPage.messagesData.map((item) => {
    return <Message textArray={item.messageText} key={item.id} />;
  });
  const newMessageText = state.dialogsPage.newMessageText;
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };
  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreater(body));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageText}
            onChange={onNewMessageChange}
            placeholder="Enter your message!"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
