import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let post_data = [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'it\`s my first post', likesCount: 12},

    ]

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.MyPost}>
                <Post messege={post_data[0].message} likesCount={post_data[0].likesCount}/>
                <Post messege={post_data[1].message} likesCount={post_data[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;
