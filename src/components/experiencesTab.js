import React from 'react'
import styles from '../css/experiences.module.css'

const ExperiencesTab = () => {
    return (
        <div id="3" className={"container windowHeight " + styles.experiences}>
            <div className="row">
                <div className="col-12">
                    <h1 className={styles.title}>Work Experience</h1>
                    <ul>
                        <li>
                            <h4>Charles Stark Draper Laboratory - System Software Development and Testing Intern</h4>
                            <p>Jan 2019 - June 2019</p>
                            <ul>
                                <li>
                                    Conducted automated testing using JavaScript for Draper’s new product lifecycle management system (PLM)
                                </li>
                                <li>
                                    Analyzed and ran 400-500 user access tests daily to identify security failures in the PLM system
                                </li>
                                <li>
                                    Organized and processed company project data using the Python Pandas library
                                </li>
                                <li>
                                    Updated and reorganized old test scripts using Object Oriented Design
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>Haozhong Information Technology - Intern</h2>
                            <p>June 2018 - August 2018</p>
                            <ul>
                                <li>
                                    Maintained functionality of websites using HTML5, CSS, MySQL, and PHP
                                </li>
                                <li>
                                    Implemented designs using HTML, CSS, BootStrap, and Javascript
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>Changing the Present - Intern</h2>
                            <p>July 2017 - August 2017</p>
                            <ul>
                                <li>
                                    Researched for environmental non-profits and philanthropic organizations 
                                </li>
                                <li>
                                    worked with other teams of interns to contact and inform organizations about a new method of fundraising for non-profits – donations in lieu of traditional presents.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>City College of New York - Research Intern</h2>
                            <p>June 2016 - August 2016</p>
                            <ul>
                                <li>
                                    Participated in the Remote Sensing of Earth Systems Science and Technology Program
                                </li>
                                <li>
                                    Investigated the reliability of NASA’s snow product algorithm using Python to process long-term raw data sets through data entry and graphing
                                </li>
                                <li>
                                    Presented project at CUNY Summer STEM Symposium
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h6>View my resume <a target="_blank" rel="noopener noreferrer" href={'https://testucket.s3.us-east-2.amazonaws.com/Brandon+Zhang+Resume.pdf'}>here</a></h6>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesTab