import React, { Component } from 'react'
import './TestAttachment.css'
import TestItem from './Test_Item'

export default class TestAttachment extends Component {
    state = {
        avoidant: [],
        anxious: [],
        anxiousCalc: {},
        avoidantCalc: {},
        questions: {
            high_anxiety_questions: ["I'm afraid that I will lose my partner's love.", "I often worry that my partner will not want to stay with me.", "I often worry that my partner doesn't really love me.", "I worry that romantic partners won’t care about me as much as I care about them.", "I often wish that my partner's feelings for me were as strong as my feelings for him or her.", "I worry a lot about my relationships.", "When my partner is out of sight, I worry that he or she might become interested in someone else.", "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.", "My romantic partner makes me doubt myself.", "I find that my partner(s) don't want to get as close as I would like.", "Sometimes romantic partners change their feelings about me for no apparent reason.", "My desire to be very close sometimes scares people away.", "I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am.", "It makes me mad that I don't get the affection and support I need from my partner.", "I worry that I won't measure up to other people.", "My partner only seems to notice me when I’m angry."],
            high_avoidance_questions: ["I prefer not to show a partner how I feel deep down.", "I find it difficult to allow myself to depend on romantic partners.", "I don't feel comfortable opening up to romantic partners.", "I prefer not to be too close to romantic partners.", "I get uncomfortable when a romantic partner wants to be very close.", "I am nervous when partners get too close to me."],
            low_anxiety_questions: ["I rarely worry about my partner leaving me.", "I do not often worry about being abandoned."
            ],
            low_avoidance_questions: ["I feel comfortable sharing my private thoughts and feelings with my partner.", "I am very comfortable being close to romantic partners.", "I find it relatively easy to get close to my partner.", "It's not difficult for me to get close to my partner.", "I usually discuss my problems and concerns with my partner.", " It helps to turn to my romantic partner in times of need.", "I tell my partner just about everything.", "I talk things over with my partner.", "I feel comfortable depending on romantic partners.", "I find it easy to depend on romantic partners.", "It's easy for me to be affectionate with my partner.", "My partner really understands me and my needs."],
        },
        values: ["anxiousValue", "avoidantValue"],
        scores: [1, 2, 3, 4, 5, 6, 7],
        responses: ["Strongly Agree", "Agree", "Somewhat Agree", "Neutral", "Somewhat Disagree", "Disagree"]
    }

    handleSelection = (event) => {

        let anxiousCalc = {}
        let avoidantCalc = {}
        let avoidantscore = null
        let anxiousscore = null
        let score = event.target.value;

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
            if (this.state.avoidant !== null) {
                let newScore = parseInt(avoidantscore) + this.state.avoidant
                this.setState({ avoidant: parseInt(newScore) })
            }
            else {
                this.setState({ avoidant: avoidantscore })
            }
            
        }
        if (event.target.name === 'anxiousValue' && !this.state.anxiousCalc[event.target.id]) {
            anxiousCalc[event.target.id] = parseInt(score)
            const combo = Object.assign(this.state.anxiousCalc, anxiousCalc)
            this.setState({
                anxiousCalc: combo
            })
            Object.values(anxiousCalc).forEach((score) =>
                anxiousscore = + score
            )
            if (this.state.anxious !== null) {
                let newScore = parseInt((anxiousscore) + this.state.anxious)
                this.setState({ anxious: newScore })
            }
            else {
                this.setState({ anxious: anxiousscore })
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

                    {this.state.questions.high_anxiety_questions.map((high_anxiety_question, i) => {
                        return <TestItem
                            key={i}
                            id={i + 1}
                            scores={this.state.scores}
                            values={this.state.values[0]}
                            high_anxiety_question={high_anxiety_question}
                            handleSelection={this.handleSelection}
                        />
                    })}
                    {this.state.questions.high_avoidance_questions.map((high_avoidance_question, i) => {
                        return <TestItem
                            key={i}
                            id={this.state.questions.high_anxiety_questions.length + i + 1}
                            scores={this.state.scores}
                            values={this.state.values[1]}
                            high_avoidance_question={high_avoidance_question}
                            handleSelection={this.handleSelection}
                        />
                    })}
                    {this.state.questions.low_avoidance_questions.map((low_avoidance_question, i) => {
                        return <TestItem
                            key={i}
                            id={this.state.questions.high_anxiety_questions.length + this.state.questions.high_avoidance_questions.length + i + 1}
                            scores={this.state.scores.reverse()}
                            values={this.state.values[1]}
                            low_avoidance_question={low_avoidance_question}
                            handleSelection={this.handleSelection}
                        />
                    })}
                    {this.state.questions.low_anxiety_questions.map((low_anxiety_question, i) => {
                        return <TestItem
                            key={i}
                            id={this.state.questions.high_anxiety_questions.length + this.state.questions.high_avoidance_questions.length + this.state.questions.low_avoidance_questions.length + i + 1}
                            scores={this.state.scores.reverse()}
                            values={this.state.values[0]}
                            low_anxiety_question={low_anxiety_question}
                            handleSelection={this.handleSelection}
                        />
                    })}


                </form>
                <button>See Your Results</button>
            </main>
        )
    }

}