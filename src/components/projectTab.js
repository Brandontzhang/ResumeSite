import React from 'react'
import styles from '../css/projects.module.css'

var recipeSite = require('../images/recipeSite.png')
var pomodoroSite = require('../images/pomodoroSite.png')

const ProjectTab = () => {
    return (
        <div id="5" className="container windowHeight">
            <h1 className={styles.projectHeader}>Projects</h1>
            <div className="row">
                <div className={`col-4 ${styles.cardHeight}`}>
                    <div className={`card ${styles.card}`}>
                        <img src={recipeSite} className="card-img-top" alt='project'/>
                        <div className={"card-body " + styles.card}>
                            <h5 className="card-title">Recipe Collaborator</h5>
                            <p className="card-text">A Recipe Collaborator web application, built with React, Spring Boot, and MySQL</p>
                            <a href="https://finalprojclient2.herokuapp.com/"  target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className={`col-4 ${styles.cardHeight}`}>
                    <div className={`card ${styles.card}`}>
                        <img src={pomodoroSite} className="card-img-top" alt='project' />
                        <div className="card-body">
                            <h5 className="card-title">Pomodoro Task Tracker</h5>
                            <p className="card-text">Application I created that I use to track the time I put in daily into homework/other tasks. Incorporated the pomodoro technique. Built using React.</p>
                            <a href="https://pomodorotasktracker.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                {/* <div className={`col-4 ${styles.cardHeight}`}>
                    <div className={`card ${styles.card}`}>
                        <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" className="card-img-top" alt='project' />
                        <div className="card-body">
                            <h5 className="card-title">Project title</h5>
                            <p className="card-text">A little about the project</p>
                            <a href="https://github.com/Brandontzhang" className="btn btn-primary">Go to project/github repo</a>
                        </div>
                    </div>
                </div> */}
            </div>
            <div>
                Visit my github: <a href="https://github.com/Brandontzhang" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
            </div>
        </div>
    )
}

export default ProjectTab