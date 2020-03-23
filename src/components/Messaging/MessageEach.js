import React from 'react'
import EditMessage from './EditMessage'
import {useState} from 'react'

export default function MessageEach(props) {
    let display = ''
    let path = props.message.match
    if (path.dater.url) {
        if (props.message.logged_in_user_id === parseInt(path.dater.url.split('/')[path.dater.url.split('/').length -1])) {
            display = path.dater
        }
        else {
            display = path.matched_with
        } 
    }

    const [showText, setShowText] = useState(false);

    // const setToggle = () => {
    //     setShowText(!showText)
    // }
    

    return (
        <div> 
            <img src={display.profile_pic} alt="avatar"className="profile_pic" />
            <div>   
            <p>{!showText && props.message.message_body}</p>
            {!showText && <button onClick={() => setShowText(!showText)}>Edit Message</button>}
            {showText && <button onClick={() => setShowText(!showText)}>Show Message</button>}
            {showText && <EditMessage {...props}/>}
            </div>
            <button onClick={() => props.deleteMessage(props.message.id)}>Delete Message</button>
        </div>
    )
}
