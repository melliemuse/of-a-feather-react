import React, { Component } from 'react'

export default class MainMatches extends Component {

    render() {
        return (
            <>
            <h3>{this.props.match.user.username}</h3>
            </>
        )
    }
}