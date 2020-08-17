import React, { useState, useEffect } from 'react';
//import { Link } from "react-router-dom"

// Components of page
import Sidebar from '../components/sidebar'
import IntroTab from '../components/introTab'
import AboutMeTab from '../components/aboutMeTab'
import ExperiencesTab from '../components/experiencesTab'
import ProjectTab from '../components/projectTab'
import InterestsTab from '../components/interestsTab'
import SkillsTab from '../components/skillsTab'
import ContactTab from '../components/contactTab'

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
        for (let i = 1; i < 0; i++) {
            var element = document.getElementById(i)
            var scrollPosition = element.getBoundingClientRect().top;
            scrollPositions[i] = Math.abs(scrollPosition)
        }

        var min = Number.POSITIVE_INFINITY;
        var index = 0;
        for (let i = 1; i < 0; i++) {
            if (scrollPositions[i] < min) {
                min = scrollPositions[i]
                index = i
            }
        }
        setCurrentTab(index)
    }

    return <div>
                <Sidebar current={currentTab} />
                <IntroTab />
            </div>
}

export default Home