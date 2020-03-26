import React, { Component } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BlockTwoToneIcon from '@material-ui/icons/BlockTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';



export default function MainMatches(props) {
  

    return (
        <div>
            <img id="profile_pic" src={props.match.profile_pic}></img>
            <h3>{props.match.user.first_name}</h3>
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
                    <>
                    <IconButton onClick={() => props.handleMatch(props.match.id)} color="inherit">
                        <FavoriteIcon />
                    </IconButton>


                    <IconButton onClick={() => props.handlePass(props.match.id, props.iterator)}>
                        <BlockTwoToneIcon />
                    </IconButton>
                    </>
        </div>

    )
}
