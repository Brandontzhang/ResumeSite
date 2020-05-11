import React from 'react'
import styles from '../css/aboutMe.module.css'
const me = require('./testImg.jpg')

function scrollToSection(section) {
    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

const AboutMeTab = () => {
    return (
        <div id="2" className="container windowHeight">
            <div className={`row ${styles.section1Height}`}>
                <div className="col-7 my-auto">
                    <img id="me" style={{height: 200}} src={me} alt='me'/>
                </div>
                <div className="col-5 my-auto">
                Hi! My name is Brandon Zhang. I'm from New York City, and I'm currently a third year studying computer engineering
                and computer science at Northeastern University. Some of my interests include web development and game design. I am
                currently looking for an internship in software development or web development for Fall 2020. In 
                my free time, I like ballroom dancing, learning how to play the guitar, and playing video games with friends. 
                </div>
            </div>
            <div className = "row">
                <div className="col-3">
                    <button className={styles.linkButton} onClick={() => scrollToSection("3")}>Work Experiences</button>
                </div>
                <div className="col-3">
                    <button className={styles.linkButton} onClick={() => scrollToSection("4")}>Skills</button>
                </div>
                <div className="col-3">
                    <button className={styles.linkButton} onClick={() => scrollToSection("5")}>Projects</button>
                </div>
                <div className="col-3">
                    <button className={styles.linkButton} onClick={() => scrollToSection("6")}>Other interests</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMeTab