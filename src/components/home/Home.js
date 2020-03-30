import React, { Component } from 'react'
import './Home.css'
import APIManager from '../helpers/APIManager'
import MainMatches from './MainMatches'
import Paper from '@material-ui/core/Paper';

export default class Home extends Component {
    state = {
        attachment_style: null,
        dater_id: null,
        matches: [],
        match_status: []
    }

    componentDidMount() {
        // Query API to return current logged in user's dater information
        APIManager.getAll("daters")
            .then((response) => {
                const attachment_style = response[0].attachment_style_id
                const age_range = response[0].age_range
                let gender_preference = response[0].gender_preference
                //  Query API by logged in user's attachment style
                // console.log(gender_preference)
                APIManager.getAll(`daters?attachment_style_id=${attachment_style}&age_range=${age_range}&gender_preference=${gender_preference}`)
                    .then(response => this.setState({ matches: response }))
                this.setState({
                    gender_preference: gender_preference,
                    age_range: age_range,
                    attachment_style: attachment_style,
                    dater_id: response[0].id
                })
            })
            .then(() => {
                APIManager.getAll("matchstatuses")
                    .then(response => this.setState({ match_status: response }))
            })
    }

    getdaters = () => {
        //  Query API by logged in user's attachment style
        console.log(this.state.age_range)
        APIManager.getAll(`daters?attachment_style_id=${this.state.attachment_style}&age_range=${this.state.age_range}&gender_preference=${this.state.gender_preference}`)
            .then(response => {
                console.log(response, "getdaters() ran")
                this.setState({ matches: response })
            }
            )
    }

    handleMatch = (matched_with_id) => {

        //    check if match exists for both users. 
        APIManager.getAll(`matches?matched_with_id=${matched_with_id}`)
            .then(response => {
                // debugger
                console.log("response", response)
                //create object for match table 
                let match = {
                    dater_id: this.state.dater_id,
                    matched_with_id: matched_with_id
                }
                //    if so, change status to matched.
                if (response[0]) {
                    let match_status_id = this.state.match_status[1].id
                    match.match_status_id = match_status_id
                    match.id = response[0].id
                    console.log("match exists", match)
                    APIManager.update(`matches`, match)
                        .then(() => {
                            this.getdaters()
                        })
                }
                //    if not, create it and change status to pending. 
                else {
                    match.match_status_id = this.state.match_status[0].id
                    console.log("match doesn't exist", match)
                    APIManager.createNew(`matches`, match)
                        .then(() => {
                            this.getdaters()
                        })
                }
            })
    }

    handlePass = (matched_with_id, iterator) => {
        //create object for match table 
        const rejected = this.state.match_status[2].id
        let match = {
            dater_id: this.state.dater_id,
            matched_with_id: matched_with_id,
            match_status_id: rejected
        }
        console.log(match)
        // check if match exists for both users. 
        // http://localhost:8000/matches?dater_id=${dater_id}&matched_with_id=${matched_with_id}
        //    check if match exists for both users. 
        APIManager.getAll(`matches?matched_with_id=${matched_with_id}`)
            .then(response => {
                console.log("response", response)
                //    if so, change status to matched.
                if (response[0]) {
                    match.id = response[iterator].id
                    console.log("match exists", match)
                    APIManager.update(`matches`, match)
                        .then(() => {
                            this.getdaters()
                        })
                }
                // if not, create it and change status to rejected. if so, change status to rejected.  
                else {
                    console.log("match doesn't exist", match)
                    APIManager.createNew(`matches`, match)
                        .then(() => {
                            this.getdaters()
                        })
                }
            })
    }

    render() {
        // console.log(this.state.matches)
        return (
            <>
            <div className="main header-margin">
                <h2>Discover</h2>

                    </div >
                <div className={"matchContainer"}>

                    {
                        this.state.matches.map((match, i) =>
                            <MainMatches
                                handleMatch={this.handleMatch}
                                handlePass={this.handlePass}
                                iterator={i}
                                match={match}
                                key={match.id}
                            />
                        )
                    }

            </div>
            </>
        )
    }
}