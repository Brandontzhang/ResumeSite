import React from 'react'
import styles from '../css/sidebar.module.css'

function scrollToSection(section) {
    var element = document.getElementById(section);
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

const Sidebar = () => {
    return (
        <div className={"windowHeight " + styles.bg}>
            <ul className="list-group">
                <li className="list-group-item" onClick={() => scrollToSection("intro")}>
                    Home
                </li>
                <li className="list-group-item" onClick={() => scrollToSection("aboutMe")}>
                    About Me
                </li>
                <li className="list-group-item" onClick={() => scrollToSection("experiences")}>
                    Experiences
                </li>
                <li className="list-group-item" onClick={() => scrollToSection("skills")}>
                    Skills
                </li>
                <li className="list-group-item" onClick={() => scrollToSection("projects")}>
                    Projects
                </li>
                <li className="list-group-item" onClick={() => scrollToSection("interests")}>
                    Other Interests
                </li>
                <li className="list-group-item" onClick={() => scrollToSection("contact")}>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Sidebar