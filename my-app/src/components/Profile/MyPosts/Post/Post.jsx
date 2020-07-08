import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="https://mytube.uz/avatars/242611.jpg"/>
                {props.message}
                   {props.messege}

                    <div>
                <span>like</span> {props.LikesCount}
            </div>
        </div>
    )
}

export default Post;
