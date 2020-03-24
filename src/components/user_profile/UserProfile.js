import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'

export default class UserProfile extends Component {

    state = {
        dater: [],
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
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
        tagline: "",
        been_reported: "",
        show_module: false
    }

    componentDidMount = () => {
        APIManager.getAll("daters")
            .then(daters => {
                const dater = daters[0]
                this.setState({
                    dater: daters,
                    id: dater.id,
                    email: dater.user.email,
                    userName: dater.user.username,
                    first_name: dater.user.first_name,
                    last_name: dater.user.last_name,
                    password: dater.user.password,
                    attachment_style_id: dater.attachment_style_id,
                    location: dater.location,
                    bio: dater.bio,
                    gender: dater.gender,
                    gender_preference: dater.gender_preference,
                    kids: dater.kids,
                    smoker: dater.smoker,
                    looking_for: dater.looking_for,
                    interests: dater.interests,
                    profile_pic: dater.profile_pic,
                    age: dater.age,
                    age_range: dater.age_range,
                    tagline: dater.tagline,
                    been_reported: dater.been_reported
                })
            })
    }


    render() {
        return (
            <>
            <main style={{ textAlign: "center" }}>
                    <h1 className="h3 mb-3 font-weight-normal">User Profile</h1>

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
                    <p>{this.state.kids && 'Yes'}</p>
                    <p>{!this.state.kids && 'No'}</p>

                    <h3> Smoker </h3>
                    <p>{this.state.smoker && 'Yes'}</p>
                    <p>{!this.state.smoker && 'No'}</p>

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
                    <p>{this.state.email}</p>

                    <button onClick={() => {this.props.history.push('/editprofile')}}>Edit</button>
                </main > 
                
            </>
        )
    }
}
