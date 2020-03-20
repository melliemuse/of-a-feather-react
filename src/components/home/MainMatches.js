import React, { Component } from 'react'

export default class MainMatches extends Component {

    render() {
        return (
            <>
            <img src={this.props.match.profile_pic}></img>
            <h3>{this.props.match.user.username}</h3>
            <h4>Age</h4>
            <p>{this.props.match.age}</p>
            {this.props.match.smoker && <p>Smoker</p>}
            {this.props.match.kids && <p>Has kids</p>}
            <h4>Lives in </h4>
            <p>{this.props.match.location}</p>
            <h4>Looking for</h4>
            <p> {this.props.match.looking_for}</p>
            <h4>Interests include </h4>
            <p>{this.props.match.interests}</p>
            <h4>Tagline</h4>
            <p>"{this.props.match.tagline}"</p>
            <h4>Bio</h4>
            <p>{this.props.match.bio}</p>
            <button 
            // id={this.props.match.id}
            onClick={() =>this.props.handleMatch(this.props.match.id)}
            >Match</button>
            <button 
            // id={this.props.match.id}
            onClick={() => this.props.handlePass(this.props.match.id, this.props.iterator)}
            >Pass</button>
            </>
        )
    }
}