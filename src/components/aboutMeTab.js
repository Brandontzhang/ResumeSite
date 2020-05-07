import React from 'react'
import styles from '../css/aboutMe.module.css'

function scrollToSection(section) {
    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

const AboutMeTab = () => {
    return (
        <div id="2" className="container windowHeight">
            <div className={`row ${styles.section1Height}`}>
                <div className="col-7 my-auto">
                    <img src="src/images/tempProf.jpg" alt='me'/>
                </div>
                <div className="col-5 my-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                In eu mi bibendum neque egestas congue quisque. Ultricies mi eget 
                mauris pharetra et ultrices neque ornare. Aliquam ultrices sagittis 
                orci a scelerisque purus semper eget duis. Nunc faucibus a pellentesque sit. 
                Est ante in nibh mauris cursus mattis molestie a iaculis. Sit amet venenatis urna cursus. 
                Rhoncus mattis rhoncus urna neque viverra justo. Gravida neque convallis a
                 cras semper auctor neque vitae. Ut ornare lectus sit amet est placerat.
                  Libero nunc consequat interdum varius sit amet mattis vulputate.
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