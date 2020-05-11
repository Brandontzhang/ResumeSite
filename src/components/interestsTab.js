import React from 'react'
import styles from '../css/interests.module.css'

const InterestsTab = () => {

    const test = () => {
        fetch('./test.jpg')
            .then(response => response.blob())
            .then(img => console.log(URL.createObjectURL(img)))
    }

    return(
        // not sure how this section will be, idk what interests I will include
        <div id="6" className="container windowHeight">
            <div className={`row ${styles.ballroomHeight}`}>
                <div className="col-6 my-auto">
                    Talk about ballroom here I guess
                </div>
                <div className="col-6 my-auto">
                    <img src="src/images/tempProf.jpg" alt='me'/>
                </div>
            </div>
            <div className="row">
                Talk about some other interests here... Maybe current game I'm playing? Some of my favorite indie games? (Hollow Knight and Celeste)
                spotify api would be cool here, like what I'm listening too, what you recommend....
            </div>
        </div>
    )
}

export default InterestsTab