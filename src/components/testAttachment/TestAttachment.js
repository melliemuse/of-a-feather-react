import React, { Component } from 'react'
import './TestAttachment.css'

export default class TestAttachment extends Component {
    state = {
        avoidant: [],
        anxious: [],
        anxiousCalc: {},
        avoidantCalc: {},
        questions: ["I'm afraid that I will lose my partner's love.", "I often worry that my partner will not want to stay with me.", "I often worry that my partner doesn't really love me.", "I worry that romantic partners won’t care about me as much as I care about them.", "I often wish that my partner's feelings for me were as strong as my feelings for him or her." ],
        responses: ["Strongly Agree", "Agree", "Somewhat Agree", "Neutral", "Somewhat Disagree", "Disagree"]
    }

    handleSelection = (event) => {

        let anxiousCalc = {}
        let avoidantCalc = {}
        let avoidantscore = null
        let anxiousscore = null
        let score = event.target.value;

        console.log("handle selection fired")

        //  If question carries an avoidant value, check to see if question has already been answered
        //  If it has, reassign value in calculation object

        if (event.target.name === 'avoidantValue' && !this.state.avoidantCalc[event.target.id]) {
            avoidantCalc[event.target.id] = parseInt(score)
            const combo = Object.assign(this.state.avoidantCalc, avoidantCalc)
            this.setState({
                avoidantCalc: combo
            })
            Object.values(avoidantCalc).forEach((score) =>
                avoidantscore = + score
            )
            let newScore = avoidantscore + this.state.avoidant
            this.setState({ avoidant: newScore})
        }
        if (event.target.name === 'anxiousValue' && !this.state.anxiousCalc[event.target.id]) {
            anxiousCalc[event.target.id] = parseInt(score)
            const combo = Object.assign(this.state.anxiousCalc, anxiousCalc)
            this.setState({
                anxiousCalc: combo
            })
            Object.values(anxiousCalc).forEach((score) =>
                anxiousscore =+ score
            )
        if (this.state.anxious !== null) {
            let newScore = parseInt((anxiousscore) + this.state.anxious)
            this.setState({ anxious: newScore })
        }
        else {
            this.setState({anxious: anxiousscore})
        }
        }

    }


    handleSubmit = (event) => {

    }

    render() {
        return (
            <main className="center_noflex">
                <h1>Determine Your Attachment Style</h1>
                <h5>Your matches will be better suited to you if you answer honestly- think of your <em>most common</em> relationship dynamics</h5>
                <form className="center">
                
                {/* {this.state.questions.map(question => {
                   
                   <fieldset>
                    <div className="question">
                    <h6 className="question_title"> {question} </h6>
                    
                        </div>
                        </fieldset> */}

                })}

                    {/* Question 1 */}
                    <fieldset>
                        <div className="question">
                            <h6 className="question_title">I'm afraid that I will lose my partner's love.</h6>
                            <input
                                type="radio"
                                id={1}
                                value={7}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Strongly Agree</label>
                            <input
                                type="radio"
                                id={1}
                                value={6}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Agree</label>
                            <input
                                type="radio"
                                id={1}
                                value={5}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Somewhat Agree</label>
                            <input
                                type="radio"
                                id={1}
                                value={4}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Neutral</label>
                            <input
                                type="radio"
                                id={1}
                                value={3}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Somewhat Disagree</label>
                            <input
                                type="radio"
                                id={1}
                                value={2}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Disagree</label>
                            <input
                                type="radio"
                                id={1}
                                value={1}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Strongly Disagree</label>
                        </div>
                    </fieldset>
                    
                    {/* Question 2 */}

                    <fieldset>
                        <div className="question">
                            <h6 className="question_title">I often worry that my partner will not want to stay with me.</h6>
                            <input
                                type="radio"
                                id={2}
                                value={7}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Strongly Agree</label>
                            <input
                                type="radio"
                                id={2}
                                value={6}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Agree</label>
                            <input
                                type="radio"
                                id={2}
                                value={5}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Somewhat Agree</label>
                            <input
                                type="radio"
                                id={2}
                                value={4}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Neutral</label>
                            <input
                                type="radio"
                                id={2}
                                value={3}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Somewhat Disagree</label>
                            <input
                                type="radio"
                                id={2}
                                value={2}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Disagree</label>
                            <input
                                type="radio"
                                id={2}
                                value={1}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Strongly Disagree</label>
                        </div>
                    </fieldset>

                    {/* Question 3 */}

                    <fieldset>
                        <div className="question">
                            <h6 className="question_title">I often worry that my partner doesn't really love me.</h6>
                            <input
                                type="radio"
                                value={1}
                                id={3}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Strongly Agree</label>
                            <input
                                type="radio"
                                id={3}
                                value={2}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Agree</label>
                            <input
                                type="radio"
                                id={3}
                                value={3}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Somewhat Agree</label>
                            <input
                                type="radio"
                                id={3}
                                value={4}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Neutral</label>
                            <input
                                type="radio"
                                id={3}
                                value={5}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Somewhat Disagree</label>
                            <input
                                type="radio"
                                id={3}
                                value={6}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Disagree</label>
                            <input
                                type="radio"
                                id={3}
                                value={7}
                                name="anxiousValue"
                                onChange={this.handleSelection}>
                            </input>
                            <label>Strongly Disagree</label>
                        </div>
                    </fieldset>

                    {/* Question 4 */}

                    <fieldset>
                        <div className="question">
                            <h6 className="question_title">I worry that romantic partners won’t care about me as much as I care about them.</h6>
                            <input
                                type="radio"
                                value={1}
                                id={4}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Strongly Agree</label>
                            <input
                                type="radio"
                                id={4}
                                value={2}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Agree</label>
                            <input
                                type="radio"
                                id={4}
                                value={3}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Somewhat Agree</label>
                            <input
                                type="radio"
                                id={4}
                                value={4}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Neutral</label>
                            <input
                                type="radio"
                                id={4}
                                value={5}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Somewhat Disagree</label>
                            <input
                                type="radio"
                                id={4}
                                value={6}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Disagree</label>
                            <input
                                type="radio"
                                id={4}
                                value={7}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Strongly Disagree</label>
                        </div>
                    </fieldset>

                    {/* Question 5 */}

                    <fieldset>
                        <div className="question">
                            <h6 className="question_title">I often wish that my partner's feelings for me were as strong as my feelings for him or her.</h6>
                            <input
                                type="radio"
                                value={1}
                                id={5}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Strongly Agree</label>
                            <input
                                type="radio"
                                id={5}
                                value={2}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Agree</label>
                            <input
                                type="radio"
                                id={5}
                                value={3}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Somewhat Agree</label>
                            <input
                                type="radio"
                                id={5}
                                value={4}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Neutral</label>
                            <input
                                type="radio"
                                id={5}
                                value={5}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Somewhat Disagree</label>
                            <input
                                type="radio"
                                id={5}
                                value={6}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Disagree</label>
                            <input
                                type="radio"
                                id={5}
                                value={7}
                                name="anxiousValue"
                                onChange={this.handleSelection}
                            >
                            </input>
                            <label>Strongly Disagree</label>
                        </div>
                    </fieldset>

                    

                </form>
                <button>See Your Results</button>
            </main>
        )
    }

}