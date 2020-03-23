import React from 'react'

export default function MessageEach(props) {
    let display = ''
    let path = props.message.match
    if (path.dater.url) {
        console.log(path.dater.url)
        console.log(path.dater.url.split('/')[path.dater.url.split('/').length -1])
        console.log(path.dater.url.split('/').length -1)
        console.log(props.message.logged_in_user_id)
        if (props.message.logged_in_user_id === parseInt(path.dater.url.split('/')[path.dater.url.split('/').length -1])) {
            display = path.dater
        }
        else {
            display = path.matched_with
        } 
    }
    return (
        <div> 
            <img src={display.profile_pic} alt="avatar"className="profile_pic" />
            <p>{props.message.message_body}</p>
            <button>Edit Message</button>
            <button onClick={() => props.deleteMessage(props.message.id)}>Delete Message</button>
        </div>
    )
}
