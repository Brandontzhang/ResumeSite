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
                    <li className={("list-group-item text-center " + ((this.props.current === 1) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("1")
                        }}>
                        <i class="fa fas fa-home"></i>
                </li>
                    <li className={("list-group-item text-center " + ((this.props.current === 2) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("2")
                        }}>
                        <span className= {styles.listItem}><i class="fa fas fa-user"></i></span>
                </li>
                    <li className={("list-group-item text-center " + ((this.props.current === 3) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("3")
                        }}>
                        <i class="fa fas fa-briefcase"></i>
                </li>
                    <li className={("list-group-item text-center " + ((this.props.current === 4) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("4")
                        }}>
                        <i class="fa fas fa-book"></i>
                </li>
                    <li className={("list-group-item text-center " + ((this.props.current === 5) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("5")
                        }}>
                        <i class="fa fas fa-code"></i>
                </li>
                    <li className={("list-group-item text-center " + ((this.props.current === 6) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("6")
                        }}>
                        <i class="fa fas fa-gamepad"></i>
                </li>
                    <li className={("list-group-item text-center " + ((this.props.current === 7) ? styles.active : styles.inactive))}
                        onClick={() => {
                            scrollToSection("7")
                        }}>
                        <i class="fa fas fa-pencil"></i>
                </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar