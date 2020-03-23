import React from 'react'
import {useState} from 'react'

export default function EditMessage(props) {
    const [message, setMessage] = useState([])
    const [showText, setShowText] = useState(false);

    const handleFieldChange = (event) => {
        setMessage({
            ...message,
            [event.target.id]: event.target.value
        })
    }


    

    return (
        <div>
            {!showText && <textarea onChange={handleFieldChange} placeholder={props.message.message_body} id='message_body' autoFocus/>}
            {!showText && <button onClick={() => props.editMessage(message, props.message.id)}>Make Changes</button>}
            <div>
            {/* {!props.showText && <button onClick={props.setToggle()}>Make Changes</button>} */}
            </div>
        </div>
    )
}
