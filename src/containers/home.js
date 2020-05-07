import React, { useState, useEffect } from 'react';
//import { Link } from "react-router-dom"
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// Components of page
import Sidebar from '../components/sidebar'
import IntroTab from '../components/introTab'
import AboutMeTab from '../components/aboutMeTab'
import ExperiencesTab from '../components/resume/experiencesTab'
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

const Home = () => {
    const [currentTab, setCurrentTab] = useState(1)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = (event) => {
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
        setCurrentTab(index)
    }

    return <Provider store={store}>
        <div className="container-fluid">
            <div className="row row-no-padding">
                <div className="col-1">
                    <Sidebar current={currentTab} />
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
}

export default Home