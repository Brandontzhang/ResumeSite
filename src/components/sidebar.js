import React from 'react'
import styles from '../css/sidebar.module.css'

function scrollToSection(section) {
    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

class Sidebar extends React.Component {
    render() {
        return (
            <div className={"windowHeight " + styles.bg}>
                <ul className="list-group">
                    <li className={("list-group-item " + ((this.props.current === 1) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("1")
                        }}>
                        Home
                </li>
                    <li className={("list-group-item " + ((this.props.current === 2) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("2")
                        }}>
                        About Me
                </li>
                    <li className={("list-group-item " + ((this.props.current === 3) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("3")
                        }}>
                        Experiences
                </li>
                    <li className={("list-group-item " + ((this.props.current === 4) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("4")
                        }}>
                        Skills
                </li>
                    <li className={("list-group-item " + ((this.props.current === 5) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("5")
                        }}>
                        Projects
                </li>
                    <li className={("list-group-item " + ((this.props.current === 6) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("6")
                        }}>
                        Other Interests
                </li>
                    <li className={("list-group-item " + ((this.props.current === 7) ? "active" : ""))}
                        onClick={() => {
                            scrollToSection("7")
                        }}>
                        Contact
                </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar