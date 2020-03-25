import React from 'react'
import { connect } from 'react-redux'
import styles from '../css/intro.module.css'

function scrollToSection(section) {
    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

class IntroTab extends React.Component {
    isInViewport = () => {
        const offset = window.innerHeight / 2
        const element = document.getElementById("intro")
        if (!element) return false;
        const top = element.getBoundingClientRect().top;
        return (top + offset) > 0 && (top - offset) <= window.innerHeight;
    }

    render() {
        return (
            <div id="1" className={`container windowHeight`}>
                <div className="row windowHeight">
                    <div className="col-8 my-auto">
                        <h1 className={styles.introHeader}>Brandon Zhang</h1>
                        <p>Aspiring Web Developer, Guitar Hobbyist, Video Game Enthusiast, Ballroom Dancer</p>
                    </div>
                    <div className="col-4 my-auto">
                        <button className={styles.introButton}
                            onClick={() => {
                                scrollToSection("2")
                            }}>
                            About Me
                        </button>
                        <button className={styles.introButton}
                            onClick={() => {
                                scrollToSection("6")
                            }}>
                            Resume
                        </button>
                        <button className={styles.introButton}
                            onClick={() => {
                                scrollToSection("7")
                            }}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    selected: state.intro.current
})

const dispatcherToPropertyMapper = (dispatch) => ({

})


export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
    (IntroTab)