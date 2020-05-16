import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/471286/3e02c162-a382-45b7-a783-27e1f82d5faf/s1200',
                followed: false, fullName: 'Alex', status: 'I am a boss', location: {city: 'NA', country: 'Russia'}
            },
            {
                id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/234183/4d3a728e-3fb0-4bf5-b78c-3f0c3f0e93c0/s1200',
                followed: true, fullName: 'Misha', status: 'I am ..', location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1209663/95d8705e-2b65-4f27-b2c7-487daded5d52/s1200',
                followed: false,
                fullName: 'Sasha',
                status: 'I am .. too',
                location: {city: 'Moscow', country: 'Russia'}
            }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;