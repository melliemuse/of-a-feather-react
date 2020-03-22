import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import MyMatchItem from './MyMatchItem'

export default class MyMatchList extends Component {
    state = {
        matches: [],
        currentUser: null
    }

    componentDidMount = () => {
        APIManager.getAll(`daters`)
            .then(currentDater => {
                this.setState({ currentUser: currentDater[0] })
                APIManager.getAll(`matches?match_status_id=2`)
                    .then(response => {
                        let matches = []
                        let match_ids = []
                        let matchObj = {}
                        response.map(match => {
                            if (this.state.currentUser) {
                                if (match.dater_id !== this.state.currentUser.id) {
                                    matches.push(match.dater)
                                    match_ids.push(match.id)
                                } else if (match.matched_with_id !== this.state.currentUser.id) {
                                    matches.push(match.matched_with)
                                    match_ids.push(match.id)
                                }
                                matchObj.match_ids = match_ids
                                matchObj.matches = matches
                                return matchObj
                            }
                        })
                        this.setState({ matches: matchObj })
                    })
            }
            )

    }

    handleUnmatch = (i) => {
        console.log(i)
        console.log(this.state.matches.match_ids[i])
        if (this.state.matches.match_ids[i]) {
            console.log(this.state.matches.match_ids[i])
            let itemToUpdate = {
                id: this.state.matches.match_ids[i],
                match_status_id: 3
            }
            APIManager.patch(`matches`, itemToUpdate)
                .then(() => {
                    APIManager.getAll(`matches?match_status_id=2`)
                        .then(response => this.setState({ matches: response }))
                })
        }
    }


    render() {
        console.log(this.state)
        return (
            <>
                
                {this.state.matches.matches && this.state.matches.matches.map((match, i) => {
                    return <MyMatchItem i={i} match_id={this.state.matches.match_ids[i]} id={parseInt(match.url.split("/")[match.url.split("/").length - 1])} key={match.url.split("/")[match.url.split("/").length - 1]} match={match} handleUnmatch={this.handleUnmatch} />
                })
                }
            </>
        )
    }
}