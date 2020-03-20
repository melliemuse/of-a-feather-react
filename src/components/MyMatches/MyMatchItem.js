import React, { Component } from 'react'

export default class MyMatchItem extends Component {
    render() {
        return (
            <div className="main flex">
                <img src={this.props.match.dater.profile_pic}></img>
                <h3>{this.props.match.dater.user.first_name}</h3>
                {/* <h4>Age</h4> */}
                <p>{this.props.match.dater.age}</p>
                {this.props.match.dater.smoker && <p>Smoker</p>}
                {this.props.match.dater.kids && <p>Has kids</p>}
                <h4>Lives in </h4>
                <p>{this.props.match.dater.location}</p>
                <h4>Looking for</h4>
                <p> {this.props.match.dater.looking_for}</p>
                <h4>Interests include </h4>
                <p>{this.props.match.dater.interests}</p>
                <h4>Tagline</h4>
                <p>"{this.props.match.dater.tagline}"</p>
                <h4>Bio</h4>
                <p>{this.props.match.dater.bio}</p>
                <button>Message</button>
                <button>Unmatch</button>
            </div>
        )

    }
}
