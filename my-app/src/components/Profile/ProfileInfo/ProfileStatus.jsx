import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    render() {
        /*if (!props.profile) {
            return <Preloader/>
        }*/
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;
