import React from 'react'
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Education from './Education';


const Main = ({ data }) => {
    return (
        <main className="l-main">
            <Home data={data} />
            <About data={data} />
            <Education data={data} />
            <Skills data={data} />
            <Project data={data} />
            <Contact data={data} />
        </main>
    )
}

export default Main