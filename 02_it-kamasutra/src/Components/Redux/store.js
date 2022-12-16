import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';


export let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hello! This is my second post!',
          url: 'https://oboi.ws/filters/vibrance_19_7314_oboi_krasivaja_buhta_240x320.jpg',
        },
        {
          id: 2,
          message: "Hi. It's a first post",
          url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
        },
        {
          id: 3,
          message: "Hi. It's a third post",
          url: 'https://cdn.100sp.ru/cache_pictures/123203262/thumb300?v=2',
        },
      ],
      newPostText: 'React/Redux lessons',
    },
    dialogsPage: {
      dialogsList: [
        {
          id: 1,
          name: 'Alex',
          userpic:
            'https://static.tildacdn.com/tild6361-3034-4333-b833-353964363837/pngwingcom_2.png',
        },
        {
          id: 2,
          name: 'Kate',
          userpic:
            'https://www.static-contents.youth4work.com/y4w/Images/Users/1636020.png?v=20190125141457',
        },
        {
          id: 3,
          name: 'Poly',
          userpic:
            'https://w7.pngwing.com/pngs/915/966/png-transparent-computer-icons-female-woman-avatar-person-hand-people-computer.png',
        },
        {
          id: 4,
          name: 'Mammy',
          userpic:
            'https://w7.pngwing.com/pngs/915/966/png-transparent-computer-icons-female-woman-avatar-person-hand-people-computer.png',
        },
      ],
      messagesData: [
        {
          id: 1,
          messageText: ['static', 'tildacdn.com', 'pngwingcom'],
        },
        {
          id: 2,
          messageText: ['How are you?!', 'transparent', 'pngs', 'person'],
        },
        {
          id: 3,
          messageText: ['Ok', 'Hello', 'JavaScript'],
        },
        {
          id: 4,
          messageText: ['computer', 'hand-people', 'className'],
        },
      ],
      newMessageText: 'New text...',
    },
    sidebar: {},
  },
  _callSubscriber(state) {
    console.log('State changed!', state);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};




