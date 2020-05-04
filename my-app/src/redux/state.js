import {rerenderEntireTree} from "../render";

let state = {
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
        messages_data: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your www?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'oO'},
            {id: 5, message: 'Ho'},
            {id: 6, message: 'Ho'},
        ],
        dialogs_data: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Lex'},
            {id: 3, name: 'Supermen'},
            {id: 4, name: 'Misha'},
            {id: 5, name: 'Vladimir'},
            {id: 6, name: 'Fiona'},
        ]
    },
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;