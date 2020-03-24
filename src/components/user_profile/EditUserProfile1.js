import React from 'react'
import {useState} from 'react'

export default function EditUserProfile(props) {
    const [dater, setdater] = useState([])

    const profile = props.dater
    
    setdater({dater: profile})

    return (
        <div>
            
        </div>
    )
}
