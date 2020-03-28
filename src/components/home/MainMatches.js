import React, { Component } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BlockTwoToneIcon from '@material-ui/icons/BlockTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


export default function MainMatches(props) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    let Coverflow = require('react-coverflow');
    
    var fn = function () {
      /* do you want */ 
      console.log("hello")
    }
    
   
      
    
    {/* <img
      src='[image/path/please_change]'
      alt='title or description'
      style={{ display: 'block', width: '100%' }}/>
  </div>
  <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
  <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/> */}
      
    

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
            {/* <h4>Interests include </h4>
            <p>{props.match.interests}</p> */}
            <h4>Tagline</h4>
            <p>{props.match.tagline}</p>
            {/* <h4>Bio</h4>
            <p>{props.match.bio}</p> */}
            
                    <IconButton onClick={() => props.handleMatch(props.match.id)} color="inherit">
                        <FavoriteIcon />
                    </IconButton>


                    <IconButton onClick={() => props.handlePass(props.match.id, props.iterator)}>
                        <BlockTwoToneIcon />
                    </IconButton>
                   {/* </div> */}
                  
      </div>
        )
       
   
}
