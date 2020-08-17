import React from 'react'
import styles from '../css/sidebar.module.css'

function scrollToSection(section) {
    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function navSlide() {
    const b = "." + styles['burger'];
    console.log(b)

    const burger = document.querySelector('.sidebar_burger__2O76q');
    console.log(burger)

    const navlist = document.querySelector(styles.navlist);

    // burger.addEventListener('click', () => {
    //     console.log('hi');
    // })
}

const Sidebar = (props) => {
    return (
        <nav className={styles.bg}>
            <div className={styles.title}>
                <h4>Brandon Zhang</h4>
            </div>
            <ul>
                <li className={("nav-item text-center " + ((props.current === 1) ? styles.active : styles.inactive))}>
                    <span className={styles.listItem}><i className="fa fas fa-user"></i> About </span>
                </li>
                <li className={("nav-item text-center " + ((props.current === 2) ? styles.active : styles.inactive))}>
                    <i className="fa fas fa-briefcase">Work</i>
                </li>
                <li className={("nav-item text-center " + ((props.current === 3) ? styles.active : styles.inactive))}>
                    <i className="fa fas fa-code">Projects</i>
                </li>
                <li className={("nav-item text-center " + ((props.current === 4) ? styles.active : styles.inactive))}>
                    <i className="fa fas fa-pencil">Contact</i>
                </li>
            </ul>
            <div className={styles.burger} onClick={() => {
                const nav = document.querySelector('ul')
                const listItems = document.querySelectorAll('ul li')
                const burger = document.querySelector('.' + styles.burger);

                nav.classList.toggle(styles.navActive)

                listItems.forEach((item, index) => {
                    if (item.style.animation) {
                        item.style.animation = ``;
                    } else {
                        item.style.animation = `listFadeIn 0.5s ease forwards ${index / 5}s`
                    }
                })

                burger.classList.toggle(styles.burgerActive);
                
            }}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
        </nav>
    )
}

export default Sidebar