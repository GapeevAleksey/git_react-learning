const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
  SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageBody;
      return state;
    case SEND_MESSAGE:
      let messageBody = state.newMessageText;

      const newMessage = {
        id: Math.floor(Math.random() * 1000),
        messageText: [messageBody],
      };
      state.newMessageText = '';
      state.messagesData.push(newMessage);
      return state;
    default:
      return state;
  }
};

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (messageBody) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageBody: messageBody,
});

export default dialogsReducer;
