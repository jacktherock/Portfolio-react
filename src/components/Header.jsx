import React, { useState } from 'react'
import { Link } from "react-scroll";
import logo from '../assets/img/logo.png'

const Header = () => {

    const [shake, setShake] = useState(false);

    const animate = () => {
        // Button begins to shake
        setShake(true);
        // Buttons stops to shake after 2 seconds
        setTimeout(() => setShake(false), 2000);
    }

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="/" className='nav__logo'>
                        <img src={logo} style={{ width: "10rem" }} onClick={animate} className={shake ? `shake ` : null} alt="" />
                    </a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link
                                to="home"
                                className="nav__link"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                // offset={200}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="about"
                                className="nav__link"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                // offset={200}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="education"
                                className="nav__link"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                // offset={200}
                                duration={500}
                            >
                                Education
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="skills"
                                className="nav__link"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                // offset={200}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="project"
                                className="nav__link"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                // offset={200}
                                duration={500}
                            >
                                Project
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="contact"
                                className="nav__link"
                                activeClass="active"
                                // spy={true}
                                smooth={true}
                                // offset={600}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header