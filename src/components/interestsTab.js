import React from 'react'
import styles from '../css/interests.module.css'
const ballroomPic = require('../images/ballroom.png')

const InterestsTab = () => {
    return (
        // not sure how this section will be, idk what interests I will include
        <div id="6" className="container windowHeight">
            <h2>Some more (random) facts about me</h2>
            <div className={`row ${styles.ballroomHeight}`}>
                <div className="col-6 my-auto">
                    While I do spend a lot of time studying computer science, I have spent a lot of the last 3 years learning how to ballroom dance.
                    I joined Northeastern’s ballroom dance club in my first year with almost no experience because of a dance class I had taken in high
                    school, a decision which has shaped my time at Northeastern. I have not only gained a skill that I never thought that I would have,
                    I have also met and befriended people in the ballroom community from all around Boston
                </div>
                <div className="col-6 my-auto">
                    <img src={ballroomPic} alt='me' />
                </div>
            </div>
            <div className="row">
                Interest in game develop/website.
                I'd like to add a cool, something I learned today (for every single day of the year section. Scrolling from a random start date.)
            </div>
        </div>
    )
}

export default InterestsTab