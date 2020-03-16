import React, { Component } from 'react'
import './TestAttachment.css'

export default class TestItem extends Component {


    render() {
        return (
            <>
                <fieldset>
                    <div className="question">
                        <h6 className="question_title"> {this.props.id}. {this.props.high_avoidance_question || this.props.high_anxiety_question || this.props.low_avoidance_question || this.props.low_anxiety_question} </h6>
                    
                
                        <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[6])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Strongly Disagree</label>
               
                <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[5])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Disagree</label>
               
                <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[4])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Somewhat Disagree</label>
                <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[3])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Neutral</label>
                <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[2])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Somewhat Agree</label>
                <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[1])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Agree</label>
                <input
                    type="radio"
                    id={this.props.id}
                    value={parseInt(this.props.scores[0])}
                    name={this.props.values}
                    onChange={this.props.handleSelection}>
                </input>
                <label>Strongly Agree</label>
                </div>
                </fieldset>
            </>
        )
    }

}
