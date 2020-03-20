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
                        // this.setState({ matches: response })
                        console.log(response)
                        console.log(currentDater)
                        let matches = []
                        response.map(match => {
                            console.log(match)
                            if (this.state.currentUser) {
                                if (match.dater_id !== this.state.currentUser.id) {
                                    matches.push(match.dater)
                                } else if (match.matched_with_id !== this.state.currentUser.id) {
                                    matches.push(match.matched_with)
                                }
                                return matches
                            }
                        })
                        this.setState({ matches: matches })
                    })
            } 
            )

    }

    handleUnmatch = (match) => {
        let itemToUpdate = {
            id: match.id,
            match_status_id: 3,
            dater_id: match.dater_id,
            matched_with_id: match.matched_with_id
        }

        APIManager.update(`matches`, itemToUpdate)
            .then(() => {
                APIManager.getAll(`matches?match_status_id=2`)
                    .then(response => this.setState({ matches: response }))
            })
    }

    render() {
        return (
            <>
                {this.state.matches.map((match, i) => {
                    return <MyMatchItem key={i} match={match} handleUnmatch={this.handleUnmatch} />
                })
                }
            </>
        )
    }
}