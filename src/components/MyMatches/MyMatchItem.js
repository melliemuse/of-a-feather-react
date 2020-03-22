import React from 'react'
import {useHistory} from 'react-router-dom'

export default function MyMatchItem(props) {
    const history = useHistory()
    return (
        <div>
            <div className="main flex">
                <img className="profile_pic" src={props.match.profile_pic} alt='avatar'></img>
                <h3>{props.match.user.first_name}</h3>
                <h4>Age</h4>
                <p>{props.match.age}</p>
                {props.match.smoker && <p>Smoker</p>}
                {props.match.kids && <p>Has kids</p>}
                <h4>Lives in </h4>
                <p>{props.match.location}</p>
                <h4>Looking for</h4>
                <p> {props.match.looking_for}</p>
                <h4>Interests include </h4>
                <p>{props.match.interests}</p>
                <h4>Tagline</h4>
                <p>"{props.match.tagline}"</p>
                <h4>Bio</h4>
                <p>{props.match.bio}</p>
                <button onClick={() => history.push(`/messages/${props.match_id}`)}>View Messages</button>
                <button onClick={() => props.handleUnmatch(props.i)}>Unmatch</button>
            </div>
        </div>
    )
}


