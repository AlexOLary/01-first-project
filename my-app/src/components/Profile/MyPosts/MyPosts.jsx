import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let posts_element =
        props.posts.map(posts => <Post messege={posts.message} LikesCount={posts.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch (addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.MyPost}>
                { posts_element }
            </div>
        </div>
    )
}

export default MyPosts;
