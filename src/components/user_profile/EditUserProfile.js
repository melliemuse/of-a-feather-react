import React, { Component } from 'react'
import Mike from "../assets/default_avatar.png"
import APIManager from '../helpers/APIManager'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';

export default class EditUserProfile extends Component {

    state = {
        email: "",
        username: "",
        last_name: "",
        password: "",
        first_name: "",
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
        APIManager.getAll("daters")
            .then(daters => {
                const dater = daters[0]
                this.setState({
                    id: dater.id,
                    email: dater.user.email,
                    username: dater.user.username,
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
                    age_range1: dater.age_range.split('-')[0],
                    age_range2: dater.age_range.split('-')[1],
                    tagline: dater.tagline,
                    been_reported: dater.been_reported
                })
            })
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
        debugger
        let stateToChange = {}
        stateToChange[evt.currentTarget.id] = evt.target.value
        this.setState(stateToChange)
    }





    handleInputChangeParams = (event) => {

        console.log(event.target.value, event.target.name)
        let stateToChange = {}
        stateToChange[event.target.name] = event.target.value
        this.setState(stateToChange)
    }

    handleSubmit = event => {
        event.preventDefault()
        // Create object with values from state
        const updatedUser = {
            "id": this.state.id,
            "username": this.state.username,
            "first_name": this.state.first_name,
            "last_name": this.state.last_name,
            "location": this.state.location,
            "bio": this.state.bio,
            "gender": this.state.gender,
            "gender_preference": this.state.gender_preference,
            "kids": this.state.kids,
            "smoker": this.state.smoker,
            "looking_for": this.state.looking_for,
            "interests": this.state.interests,
            "profile_pic": this.state.profile_pic,
            "age": this.state.age,
            "age_range": `${this.state.age_range1}-${this.state.age_range2}`,
            "tagline": this.state.tagline,
            "been_reported": this.state.been_reported,
            "email": this.state.email,
            "password": this.state.password,
            "attachment_style_id": this.state.attachment_style_id
        }
        console.log(updatedUser)
        // Make a fetch call with the object as the body of the POST request
        APIManager.update("daters", updatedUser)
            .then(() => console.log(this.state))
            .then(() => { this.props.history.push('/userprofile') })
    }

    render() {

        console.log(this.state.profile_pic)
        return (

            <main style={{ textAlign: "center" }} className="main">
                <Paper elevation={4} className={'paper'} margin={'spacing(.25)'}>
                    <h1 style={{ padding: "50px" }} className="profileTitle">Edit Your Profile</h1>
                    <div className="center">
                        <div className="pictureUpload">
                            {!this.state.profile_pic && <img src={Mike} alt='profile' width="300" height="300"></img>}
                            {this.state.profile_pic && <img className="profile_pic_thumbnail" src={this.state.profile_pic} alt='profile' width="300" height="300"></img>}
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                onClick={this.uploadWidget}
                                startIcon={<PhotoCamera />}
                            >
                            </Button>
                        </div>


                        <div style={{ "textAlign": "left" }}>
                            <form className="form--login" onSubmit={this.handleSubmit}>

                        <TextField
                        onChange={(evt) => this.handleInputChange(evt)}
                            id="username"
                            label="Username"
                            helperText="Username"
                            variant="outlined"
                            value={this.state.username}
                            autoFocus
                        />

                        <TextField
                        onChange={(evt) => this.handleInputChange(evt)}
                            id="first_name"
                            label="First Name"
                            helperText="First Name"
                            variant="outlined"
                            value={this.state.first_name}
                            autoFocus
                        />
                                {/* <fieldset>
                                    <label htmlFor="first_name"> First Name </label>
                                    <input onChange={this.handleInputChange}
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        className="form-control"
                                        value={this.state.first_name}
                                        autoFocus />
                                </fieldset> */}
                                <fieldset>
                                    <label htmlFor="last_name"> Last Name </label>
                                    <input onChange={this.handleInputChange}
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        className="form-control"
                                        value={this.state.last_name}
                                    />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="inputLocation"> Location </label>
                                    <input onChange={this.handleInputChange}
                                        id="location"
                                        type="text"
                                        name="location"
                                        className="form-control"
                                        value={this.state.location}
                                    />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="inputBio"> Bio </label>
                                    <input onChange={this.handleInputChange}
                                        id="bio"
                                        type="text"
                                        name="bio"
                                        className="form-control"
                                        value={this.state.bio}
                                    />
                                </fieldset>


                                <FormControl variant={"outlined"}>
                                    {/* <InputLabel id="gender">Gender</InputLabel> */}
                                    <Select
                                        // labelId="gender"
                                        id="gender"
                                        name="gender"
                                        value={this.state.gender}
                                        onChange={this.handleInputChangeParams.bind(this)}
                                        autoWidth
                                    >
                                        <MenuItem value="" selected>
                                        </MenuItem>
                                        <MenuItem value={"female"} selected={this.state.gender === "female"}>Female</MenuItem>
                                        <MenuItem value={"male"} selected={this.state.gender === "male"}>Male</MenuItem>
                                        <MenuItem value={"other"} selected={this.state.gender === "other"}>Other</MenuItem>
                                    </Select>
                                    <FormHelperText>Gender </FormHelperText>
                                </FormControl>

                                <fieldset>
                                    <FormControl variant={"outlined"}>
                                        {/* <InputLabel id="gender_preference">Gender Preference</InputLabel> */}
                                        <Select
                                            // labelId="gender_preference"
                                            id="gender_preference"
                                            name="gender_preference"
                                            value={this.state.gender_preference}
                                            onChange={this.handleInputChangeParams.bind(this)}
                                            autoWidth
                                        >
                                            <MenuItem value="" selected>
                                            </MenuItem>
                                            <MenuItem value={"female"} selected={this.state.gender_preference === "female"}>Female</MenuItem>
                                            <MenuItem value={"male"} selected={this.state.gender_preference === "male"}>Male</MenuItem>
                                            <MenuItem value={"all"} selected={this.state.gender_preference === "all"}>All</MenuItem>
                                        </Select>
                                        <FormHelperText>Gender Preference</FormHelperText>
                                    </FormControl>
                                </fieldset>

                                <fieldset>
                                    <FormControl variant={"outlined"}>
                                        <Select
                                            id="kids"
                                            name="kids"
                                            value={this.state.kids}
                                            onChange={this.handleInputChangeParams.bind(this)}
                                            autoWidth
                                        >
                                            <MenuItem value="" selected>
                                            </MenuItem>
                                            <MenuItem value={0} selected={this.state.kids === 0 || this.state.kids === false}>No</MenuItem>
                                            <MenuItem value={1} selected={this.state.kids === 1 || this.state.kids === true}>Yes</MenuItem>
                                        </Select>
                                        <FormHelperText>Do You Have Kids?</FormHelperText>
                                    </FormControl>
                                </fieldset>

                                <fieldset>
                                    <FormControl variant={"outlined"}>
                                        <Select
                                            id="smoker"
                                            name="smoker"
                                            value={this.state.smoker}
                                            onChange={this.handleInputChangeParams.bind(this)}
                                            autoWidth
                                        >
                                            <MenuItem value="" selected>
                                            </MenuItem>
                                            <MenuItem value={0} selected={this.state.smoker === 0 || this.state.smoker === false}>No</MenuItem>
                                            <MenuItem value={1} selected={this.state.smoker === 1 || this.state.smoker === true}>Yes</MenuItem>
                                        </Select>
                                        <FormHelperText>Do You Smoke?</FormHelperText>
                                    </FormControl>
                                </fieldset>

                                <FormControl variant={"outlined"}>
                                    <Select
                                        id="looking_for"
                                        name="looking_for"
                                        value={this.state.looking_for}
                                        onChange={this.handleInputChangeParams.bind(this)}
                                        autoWidth
                                    >
                                        <MenuItem value="" selected>
                                        </MenuItem>
                                        <MenuItem value={"relationship"} selected={this.state.looking_for === "relationship"}>Relationship</MenuItem>
                                        <MenuItem value="something casual" selected={this.state.looking_for === "something casual"}>
                                            Something Casual</MenuItem>
                                        <MenuItem value="unsure" selected={this.state.looking_for === "unsure"}>
                                            Unsure</MenuItem>
                                    </Select>
                                    <FormHelperText>What are You Looking For?</FormHelperText>
                                </FormControl>

                                <fieldset>
                                    <label htmlFor="inputInterests"> Interests </label>
                                    <input onChange={this.handleInputChange}
                                        id="interests"
                                        type="text"
                                        name="interests"
                                        value={this.state.interests}
                                        className="form-control"
                                    />
                                </fieldset>


                                <fieldset>
                                    <label htmlFor="inputAge"> Age </label>
                                    <input onChange={this.handleInputChange}
                                        id="age"
                                        type="number"
                                        name="age"
                                        className="form-control"
                                        value={this.state.age}
                                    />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="inputAgeRange"> Age Range </label>
                                    <input onChange={this.handleInputChange}
                                        id="age_range1"
                                        type="number"
                                        min="13" max="100" step="1"
                                        name="age_range"
                                        className="form-control"
                                        value={this.state.age_range1}
                                    />
                                    <input onChange={this.handleInputChange}
                                        id="age_range2"
                                        type="number"
                                        min="13" max="100" step="1"
                                        name="age_range"
                                        className="form-control"
                                        value={this.state.age_range2}
                                    />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="inputTagline"> Tagline </label>
                                    <input onChange={this.handleInputChange}
                                        id="tagline"
                                        type="text"
                                        name="tagline"
                                        value={this.state.tagline}
                                        className="form-control"
                                    />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="inputEmail"> Email address </label>
                                    <input onChange={this.handleInputChange}
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        placeholder="Email address"
                                    />
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="inputPassword"> Update Password </label>
                                    <input onChange={this.handleInputChange}
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        className="form-control"
                                    />
                                </fieldset>
                                {/* <fieldset>
                        <label htmlFor="verifyPassword"> Verify Password </label>
                        <input onChange={this.handleInputChange}
                            id="verifyPassword"
                            type="password"
                            name="verifyPassword"
                            className="form-control"
                            placeholder="Verify password"
                        />
                    </fieldset> */}
                                <fieldset>

                                    <Button
                                        type="submit"
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Make Changes
                </Button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </Paper>
            </main>
        )
    }
}
