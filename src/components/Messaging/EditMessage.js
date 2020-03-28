import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from '../helpers/APIManager'
import DoneOutlineTwoToneIcon from '@material-ui/icons/DoneOutlineTwoTone';

export default function EditMessage(props) {
    const [message, setMessage] = useState([])
    const [showText, setShowText] = useState(false);

    const handleFieldChange = (event) => {
        setMessage({
            // ...message,
            [event.target.id]: event.target.value
        })
    }

    useEffect(() => {
        APIManager.getSingle('messages', props.message.id)
        .then(message => {
            console.log(message.message_body)
            setMessage({
                message_body: message.message_body
            })
            console.log(message.message_body)
        })
    }, [])

    console.log(props.message.id)

    

    return (
        <div>
            {!showText && <textarea onChange={handleFieldChange} value={message.message_body} id='message_body' autoFocus/>}
            {!showText && <DoneOutlineTwoToneIcon onClick={() => props.editMessage(message, props.message.id)}>Make Changes</DoneOutlineTwoToneIcon>}
            <div>
            {/* {!props.showText && <button onClick={props.setToggle()}>Make Changes</button>} */}
            </div>
        </div>
    )
}
