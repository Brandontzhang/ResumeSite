import React from 'react'
import BarChart from './BarChart'
import styles from '../css/skills.module.css'

const languages = {
    title: { text: "Languages" },
    labels: ['Java', 'JavaScript','Python', 'C++', 'C'],
    fontColor: "white",
    datasets: [
        {
            label: '',
            borderColor: 'white',
            borderWidth: 1,
            hoverBackgroundColor: 'grey',
            hoverBorderColor: 'gray',
            data: [5, 4, 3, 2, 2, 0, 5]
        },
    ]
};

const webDev = {
    title: { text: "Wed Development" },
    labels: ['React', 'Spring Boot', 'MySQL', 'Angular', 'NodeJS', 'Express', 'MongoDB'],
    fontColor: "white",
    datasets: [
        {
            label: '',
            borderColor: 'white',
            borderWidth: 1,
            hoverBackgroundColor: 'grey',
            hoverBorderColor: 'gray',
            data: [5, 3, 3, 2, 4, 2, 2, 0, 5]
        },
    ]
};


const SkillsTab = () => {
    return (
        <div id="4" className="container windowHeight">
            <div className={styles.title}>
                <h2>Skills</h2>
            </div>
            <div className={"row " + styles.skillsTab}>
                <div className="col-6">
                    <BarChart data={languages} />
                </div>
                <div className="col-6">
                    <BarChart data={webDev} />
                </div>
            </div>
        </div>
    )
}

export default SkillsTab