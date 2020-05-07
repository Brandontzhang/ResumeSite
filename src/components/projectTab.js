import React from 'react'
import styles from '../css/projects.module.css'

const ProjectTab = () => {
    return (
        <div id="5" className="container windowHeight">
            <h1 className={styles.projectHeader}>Projects</h1>
            <div className="row windowHeight">
                <div className={`col-4 ${styles.cardHeight}`}>
                    <div className={`card ${styles.card}`}>
                        <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" className="card-img-top" alt='project'/>
                        <div className="card-body">
                            <h5 className="card-title">Project title</h5>
                            <p className="card-text">A little about the project</p>
                            <a href="https://github.com/Brandontzhang" className="btn btn-primary">Go to project/github repo</a>
                        </div>
                    </div>
                </div>
                <div className={`col-4 ${styles.cardHeight}`}>
                    <div className={`card ${styles.card}`}>
                        <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" className="card-img-top" alt='project' />
                        <div className="card-body">
                            <h5 className="card-title">Project title</h5>
                            <p className="card-text">A little about the project</p>
                            <a href="https://github.com/Brandontzhang" className="btn btn-primary">Go to project/github repo</a>
                        </div>
                    </div>
                </div>
                <div className={`col-4 ${styles.cardHeight}`}>
                    <div className={`card ${styles.card}`}>
                        <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" className="card-img-top" alt='project' />
                        <div className="card-body">
                            <h5 className="card-title">Project title</h5>
                            <p className="card-text">A little about the project</p>
                            <a href="https://github.com/Brandontzhang" className="btn btn-primary">Go to project/github repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTab