import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'it\`s my first post', likesCount: 12},

    ]

    let posts_element =
        posts.map(posts => <Post messege={posts.message} LikesCount={posts.likesCount}/>)

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
                { posts_element }
            </div>
        </div>
    )
}

export default MyPosts;
