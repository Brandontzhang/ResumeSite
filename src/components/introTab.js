import React from 'react'
//import styles from '../css/intro.module.css'

class IntroTab extends React.Component {
    componentDidMount() {
        console.log(this.isInViewport())
    }

    isInViewport = (offset) => {
        offset = window.innerHeight/2
        const element = document.getElementById("intro")
        if (!element) return false;
        const top = element.getBoundingClientRect().top;
        return (top + offset) > 0 && (top - offset) <= window.innerHeight;
    }

    render() {
        return (
            <div id="intro" className={"container windowHeight"}>
                <div className="row">
                    <div className="col-8">
                        <h1>Hello! My name is Brandon!</h1>
                        <p>This is gonna be my site where I try to learn alot about react</p>
                    </div>
                    <div className="col-4">
                        <button>
                            Some call to action
                    </button>
                        <button>
                            About me, contact etc..
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroTab