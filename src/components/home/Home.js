import React, { Component } from 'react'
import './Home.css'
import APIManager from '../helpers/APIManager'
import MainMatches from './MainMatches'
import Filter from './Filter'

export default class Home extends Component {
    state = {
        attachment_style: null,
        filter_id: 0,
        dater_id: null,
        matches: [],
        match_status: []
    }

    componentDidMount() {
        // Add exclude to exclude rejected and matched matches
        APIManager.getAll("daters")
        .then((response) => {
            console.log(response)
            console.log(response[0])
            console.log(response[0].attachment_style_id)
            const attachment_style = response[0].attachment_style_id
            if (this.state.filter_id !== null) {
                APIManager.getAll(`daters?attachment_style_id=${attachment_style}`)
                .then(response => this.setState({ matches: response }))
            }
                this.setState({
                    // attachment_style: attachment_style,
                    dater_id: response[0].id })
            })
            .then(() => {
                APIManager.getAll("matchstatuses")
                .then(response => this.setState({match_status: response}))
            })
    }

    handleMatch = (matched_with_id) => {
        
        //    check if match exists for both users. 
        APIManager.getAll(`matches?dater_id=${this.state.dater_id}&matched_with_id=${matched_with_id}`)
            .then(response => {
                console.log("response",response)
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
                    // .then(response => console.log(response))
                }
                //    if not, create it and change status to pending. 
                else {
                    match.match_status_id = this.state.match_status[0].id
                    console.log("match doesn't exist", match)
                    APIManager.createNew(`matches`, match)
                    // .then(response => console.log(response))
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
        APIManager.getAll(`matches?dater_id=${this.state.dater_id}&matched_with_id=${matched_with_id}`)
            .then(response => {
                console.log("response",response)
                //    if so, change status to matched.
                if (response[0]) {
                    match.id = response[iterator].id
                    console.log("match exists", match)
                    APIManager.update(`matches`, match)
                    // .then(response => console.log(response))
                }
                // if not, create it and change status to rejected. if so, change status to rejected.  
                else {
                    console.log("match doesn't exist", match)
                    APIManager.createNew(`matches`, match)
                    // .then(response => console.log(response))
                }
            })

    }

    render() {
        console.log(this.state.matches)
        return (
            <div className="main">
                <h1>Matches</h1>
                <div>
                    <Filter />
                </div>
                <div>
                    {this.state.matches.map((match, i) =>
                        <MainMatches
                            handleMatch={this.handleMatch}
                            handlePass={this.handlePass}
                            iterator={i}
                            match={match}
                            key={match.id}
                        />
                    )}
                </div>
            </div>
        )
    }

}