import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'

export default class UserProfile extends Component() {

    state = {
        email: "",
        userName: "",
        lastName: "",
        password: "",
        firstName: "",
        verifyPassword: "",
        attachment_style_id: "",
        location: "",
        bio: "",
        gender: "",
        gender_preference: "",
        kids: "",
        smoker: "",
        looking_for: "",
        interests: "",
        profile_pic: "",
        age: "",
        age_range1: "",
        age_range2: "",
        tagline: "",
        been_reported: ""
    }

    componentDidMount = () => {
        // APIManager.getSingle("daters")
    }


    render() {
        // console.log(this.state.profile_pic)
        return (
            <main style={{ textAlign: "center" }}>
                {/* <h1 className="h3 mb-3 font-weight-normal">User Profile</h1>

                {this.state.profile_pic && <img className="profile_pic_thumbnail" src={this.state.profile_pic} alt='profile' width="300" height="300"></img>}

                <h3>Username</h3>
                <p>{this.state.userName}</p>

                <h3> First Name </h3>
                <p>{this.state.first_name}</p>

                <h3> Last Name </h3>
                <p>{this.state.last_name}</p>

                <h3> Location </h3>
                <p>{this.state.location}</p>

                <h3> Bio </h3>
                <p>{this.state.bio}</p>

                <h3> Gender </h3>
                <p>{this.state.gender}</p>

                <h3> Gender Preference </h3>
                <p>{this.state.gender_preference}</p>

                <h3> Kids </h3>
                <p>{this.state.kids}</p>

                <h3> Smoker </h3>
                <p>{this.state.smoker}</p>

                <h3> Looking For </h3>
                <p>{this.state.looking_for}</p>

                <h3> Interests </h3>
                <p>{this.state.interests}</p>

                <h3> Age </h3>
                <p>{this.state.age}</p>

                <h3> Age Range </h3>
                <p>{this.state.age_range}</p>

                <h3> Tagline </h3>
                <p>{this.state.tagline}</p>

                <h3> Email </h3>
                <p>{this.state.email}</p> */}



            </main >
        )
    }
}
