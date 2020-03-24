import React from 'react';
//import { Link } from "react-router-dom"
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// Components of page
import Sidebar from '../components/sidebar'
import IntroTab from '../components/introTab'
import AboutMeTab from '../components/aboutMeTab'
import ExperiencesTab from '../components/experiencesTab'
import ProjectTab from '../components/projectTab'
import InterestsTab from '../components/interestsTab'
import SkillsTab from '../components/skillsTab'
import ContactTab from '../components/contactTab'

// reducers
import introReducer from '../reducers/introReducer'
import sidebarReducer from '../reducers/sidebarReducer'

const rootReducer = combineReducers({
    intro: introReducer,
    // aboutMe: aboutMeReducer,
    // contact: contactReducer,
    // interests: interestsReducer,
    // project: projectReducer,
    // skills: skillsReducer, 
    // experience: experienceReducer,
    sidebar: sidebarReducer
})

const store = createStore(rootReducer)

class Home extends React.Component {
    state = {
        current: 1
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        var scrollPositions = []
        for (let i = 1; i < 8; i++) {
            var element = document.getElementById(i)
            var scrollPosition = element.getBoundingClientRect().top;
            scrollPositions[i] = Math.abs(scrollPosition)
        }
        var min = Number.POSITIVE_INFINITY;
        var index = 0;
        for (let i = 1; i < 8; i++) {
            if (scrollPositions[i] < min) {
                min = scrollPositions[i]
                index = i
            }
        }
        this.setState(prevState => {
            return{
                current: index
            }
        })
    }

    render() {
        return (
            <Provider store={store}>
                <div className="container-fluid">
                    <div className="row row-no-padding">
                        <div className="col-1">
                            <Sidebar current={this.state.current}/>
                        </div>
                        <div className="col-11">
                            <IntroTab />
                            <AboutMeTab />
                            <ExperiencesTab />
                            <SkillsTab />
                            <ProjectTab />
                            <InterestsTab />
                            <ContactTab />
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default Home