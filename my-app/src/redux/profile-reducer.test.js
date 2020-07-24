import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'it\`s my first post', likesCount: 12},
        {id: 3, message: 'it\`s my 2 post', likesCount: 11},
        {id: 4, message: 'it\`s my 3 post', likesCount: 1},

    ]
};

it('length of post should be incremented ', () => {
    //1. test data
    let action = addPost('it book');

    //2. action
    let newState = profileReducer (state,action);
    //3. expectation
    expect(newState.posts.length).toBe(5);

});

it('length of post deletePost ', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer (state,action);
    //3. expectation
    expect(newState.posts.length).toBe(3);

});

it('no id users ', () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer (state,action);
    //3. expectation
    expect(newState.posts.length).toBe(4);

});



