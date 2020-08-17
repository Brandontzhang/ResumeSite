import React from 'react'
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
            <React.Fragment>
                <div className={styles.container}>
                    <div className={styles.grid1}>
                        <div className={styles.imageGrid}>
                            {/* will hold profile image */}
                        image
                    </div>
                        <div>
                            <p className={styles.speechBubble}>HELLO</p>
                            <h4>Web Developer, Ballroom Dancer, Guitar Player, Game Enthusiast</h4>
                            <div>
                                Hi! My name is Brandon Zhang. I'm from New York City, and I'm currently a third year studying computer engineering
                                and computer science at Northeastern University. Some of my interests include web development and game design. I am
                                currently looking for an internship in software development or web development for Fall 2020. In
                                my free time, I like ballroom dancing, learning how to play the guitar, and playing video games with friends.
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default IntroTab