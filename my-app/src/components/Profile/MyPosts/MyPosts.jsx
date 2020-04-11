import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post messege='Hi, how are you?' LikesCount="0"/>
                <Post message="it`s my first post" LikesCount="13"/>
            </div>
        </div>
    )
}

export default MyPosts;
