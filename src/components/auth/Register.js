import React, { Component } from "react"
import { register } from "../helpers/simpleAuth"
import Mike from "../assets/default_avatar.png"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Register.css'
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


class Register extends Component {

    state = {
        email: "",
        userName: "",
        lastName: "",
        password: "",
        firstName: "",
        verifyPassword: "",
        attachment_style_id: 1,
        location: "",
        bio: "",
        gender: "female",
        gender_preference: "female",
        kids: 0,
        smoker: 0,
        looking_for: "relationship",
        interests: "",
        profile_pic: "",
        age: null,
        age_range1: null,
        age_range2: null,
        tagline: "",
        been_reported: 0
    }

    uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: "dwjgfd51f", upload_preset: "xq4hmw9d", tags: ['dater_avatar'] },
            (error, result) => {
                if (result) {
                    console.log("result", result);
                    console.log("https://res.cloudinary.com/dwjgfd51f/image/upload/v1584759759/" + result[0].public_id)
                    this.setState({
                        profile_pic: `https://res.cloudinary.com/dwjgfd51f/image/upload/v1584759759/${result[0].public_id}`
                    })
                }
            })
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = event => {
        event.preventDefault()

        // Create object with values from state
        const newUser = {
            "username": this.state.userName,
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "location": this.state.location,
            "bio": this.state.bio,
            "gender": this.state.gender,
            "gender_preference": this.state.gender_preference,
            "kids": parseInt(this.state.kids),
            "smoker": parseInt(this.state.smoker),
            "looking_for": this.state.looking_for,
            "interests": this.state.interests,
            "profile_pic": this.state.profile_pic,
            "age": parseInt(this.state.age),
            "age_range": `${this.state.age_range1}-${this.state.age_range2}`,
            "tagline": this.state.tagline,
            "been_reported": this.state.been_reported,
            "email": this.state.email,
            "password": this.state.password,
            "attachment_style_id": this.state.attachment_style_id,
        }

        // Make a fetch call with the object as the body of the POST request
        register(newUser)
            .then(() => this.props.history.push("/assessment"))
    }

    render() {
        console.log(this.state.profile_pic)
        return (
            <main style={{ textAlign: "center" }}>
                <h1 className="h3 mb-3 font-weight-normal">Register and Create Your Profile!</h1>
                {!this.state.profile_pic && <img src={Mike} alt='profile' width="300" height="300" style={{display: "block"}} ></img>}
                {this.state.profile_pic && <img className="profile_pic_thumbnail" src={this.state.profile_pic} alt='profile' width="300" height="300" style={{display: "block"}}></img>}
                <Button
                    // style={{marginRight: spacing + 'em'}}
                    style={{display: "block"}}
                    style={{float:"center"}}
                    variant="contained"
                    color="primary"
                    onClick={this.uploadWidget}
                    startIcon={<PhotoCamera />}
                >
                    Upload Profile Picture
      </Button>
                {/* <button onClick={this.uploadWidget}>Upload Profile Picture</button> */}
                

                <form className="form--login" onSubmit={this.handleRegister}>
                    <fieldset>
                    <label htmlFor="userName"> Username </label>
                        <input id="userName" label="username" variant="outlined"
                            onChange={(evt) => this.handleInputChange(evt)}
                            id="userName"
                            type="text"
                            name="userName"
                            className="form-control"
                            placeholder="Username"
                            required autoFocus
                        />

                    </fieldset>
                    <fieldset>
                        <label htmlFor="firstName"> First Name </label>
                        <input onChange={this.handleInputChange}
                            id="firstName"
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First name"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName"> Last Name </label>
                        <input onChange={this.handleInputChange}
                            id="lastName"
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last name"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputLocation"> Location </label>
                        <input onChange={this.handleInputChange}
                            id="location"
                            type="text"
                            name="location"
                            className="form-control"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputBio"> Bio </label>
                        <input onChange={this.handleInputChange}
                            id="bio"
                            type="text"
                            name="bio"
                            className="form-control"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputGender"> Gender </label>
                        <select
                            className="form-control"
                            id="gender"
                            onChange={this.handleInputChange}>
                            <option value="female">
                                Female
                  </option>
                            <option value="male">
                                Male
                  </option>
                            <option value="other">
                                Other
                  </option>
                        </select>

                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputGenderPreference"> Gender Preference </label>
                        <select
                            className="form-control"
                            id="gender_preference"
                            onChange={this.handleInputChange}>
                            <option value="female">
                                Female
                  </option>
                            <option value="male">
                                Male
                  </option>
                            <option value="all">
                                All
                  </option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label>Do you have kids?</label>
                        <select
                            className="form-control"
                            id="kids"
                            onChange={this.handleInputChange}>
                            <option value={0}>
                                No
                  </option>
                            <option value={1}>
                                Yes
                  </option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label>Do you smoke?</label>
                        <select
                            className="form-control"
                            id="smoker"
                            onChange={this.handleInputChange}
                        >
                            <option value={0}>
                                No
                  </option>
                            <option value={1}>
                                Yes
                  </option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label>What are you looking for?</label>
                        <select
                            className="form-control"
                            id="looking_for"
                            onChange={this.handleInputChange}>
                            <option value="relationship">
                                Relationship
                  </option>
                            <option value="something casual">
                                Something Casual
                  </option>
                            <option value="unsure">
                                Unsure
                  </option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputInterests"> Interests </label>
                        <input onChange={this.handleInputChange}
                            id="interests"
                            type="text"
                            name="interests"
                            className="form-control"
                            required />
                    </fieldset>


                    <fieldset>
                        <label htmlFor="inputAge"> Age </label>
                        <input onChange={this.handleInputChange}
                            id="age"
                            type="number"
                            name="age"
                            className="form-control"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputAgeRange"> Age Range </label>
                        <input onChange={this.handleInputChange}
                            id="age_range1"
                            type="number"
                            min="13" max="100" step="1"
                            name="age_range"
                            className="form-control"
                            required />
                        <input onChange={this.handleInputChange}
                            id="age_range2"
                            type="number"
                            min="13" max="100" step="1"
                            name="age_range"
                            className="form-control"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputTagline"> Tagline </label>
                        <input onChange={this.handleInputChange}
                            id="tagline"
                            type="text"
                            name="tagline"
                            className="form-control"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input onChange={this.handleInputChange}
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input onChange={this.handleInputChange}
                            id="password"
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="verifyPassword"> Verify Password </label>
                        <input onChange={this.handleInputChange}
                            id="verifyPassword"
                            type="password"
                            name="verifyPassword"
                            className="form-control"
                            placeholder="Verify password"
                            required />
                    </fieldset>
                    <fieldset>

                        <Button type="submit">
                            Register
            </Button>
                    </fieldset>
                </form>
            </main>
        )
    }
}

export default Register

