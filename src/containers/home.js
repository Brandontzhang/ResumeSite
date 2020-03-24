import React from 'react';
import Sidebar from '../components/sidebar'
import IntroTab from '../components/introTab'
import AboutMeTab from '../components/aboutMeTab'
import WorkTab from '../components/workTab'
import ProjectTab from '../components/projectTab'
import InterestsTab from '../components/interestsTab'
import SkillsTab from '../components/skillsTab'
import ContactTab from '../components/contactTab'

class Home extends React.Component {
    render() {
        return (
            <div className = "container-fluid">
                <div className= "row row-no-padding">
                    <div className = "col-1">
                        <Sidebar />
                    </div>
                    <div className = "col-11">
                        <IntroTab />
                        <AboutMeTab />
                        <WorkTab />
                        <SkillsTab />
                        <ProjectTab />
                        <InterestsTab />
                        <ContactTab />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home