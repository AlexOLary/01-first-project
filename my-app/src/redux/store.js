import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'it\`s my first post', likesCount: 12},
                {id: 3, message: 'it\`s my 2 post', likesCount: 11},
                {id: 4, message: 'it\`s my 3 post', likesCount: 1},

            ],
            newPostText: 'Введите ваше сообщение!'
        },
        dialogsPage: {
            dialogs_data: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Lex'},
                {id: 3, name: 'Supermen'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Vladimir'},
                {id: 6, name: 'Fiona'},
            ],
            messages_data: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your www?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'oO'},
                {id: 5, message: 'Ho'},
                {id: 6, message: 'Ho'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
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
    }
};






export default store;
window.store = store;