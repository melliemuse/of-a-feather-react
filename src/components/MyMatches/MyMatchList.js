import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import MyMatchItem from './MyMatchItem'

export default class MyMatchList extends Component {
    state = {
        matches: []
    }

    componentDidMount = () => {
        APIManager.getAll(`matches?match_status_id=2`)
            .then(response => this.setState({ matches: response }))
    }

    render() {
        return (
            <>
            {this.state.matches.map(match => {
                return <MyMatchItem match={match} />
            })}
            </>
        )
    }
}