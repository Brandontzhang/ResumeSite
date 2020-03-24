import React from 'react'

const AboutMeTab = () => {
    return (
        <div id="aboutMe" className="container windowHeight">
            <div className="row">
                <div className="col-8">
                    Gonna have a picture of me here?
                </div>
                <div className="col-4">
                    And more specific details about me here...
                </div>
            </div>
            <div className = "row">
                <div className="col-3">
                    <button>Link to Work</button>
                </div>
                <div className="col-3">
                    <button>Link to skills</button>
                </div>
                <div className="col-3">
                    <button>link to projects/github</button>
                </div>
                <div className="col-3">
                    <button>link to other interests</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMeTab