import React from 'react'
import {connect} from 'react-redux'
// import styles from '../css/intro.module.css'

class IntroTab extends React.Component {
    isInViewport = () => {
        const offset = window.innerHeight/2
        const element = document.getElementById("intro")
        if (!element) return false;
        const top = element.getBoundingClientRect().top;
        return (top + offset) > 0 && (top - offset) <= window.innerHeight;
    }

    render() {
        return (
            <div id="1" className={`container windowHeight`}>
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

const stateToPropertyMapper = (state)  => ({
    selected: state.intro.current
})

const dispatcherToPropertyMapper = (dispatch) => ({

})


export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
    (IntroTab)