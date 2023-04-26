import React from 'react'
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'
import project5 from '../assets/img/project5.png'
import project6 from '../assets/img/project6.png'
import project7 from '../assets/img/project7.png'
import more_project from '../assets/img/more_project.png'

const Project = ({ data }) => {

    const projects = [
        {
            id: 1,
            name: "Local Media Flix",
            image: project1,
            github: `${data.github}/Local-Media-Flix`
        },
        {
            id: 7,
            image: project7,
            github: `${data.github}/Cryptobash`
        },
        {
            id: 2,
            image: project2,
            github: `${data.github}/Jokes-API-Project`
        },
        {
            id: 3,
            image: project3,
            github: `${data.github}/ClownBlog`
        },
        {
            id: 4,
            image: project4,
            github: `${data.github}/Ecommerce-KartoonShop-master`
        },
        {
            id: 5,
            image: project5,
            github: `${data.github}/iNotebook`
        },
        {
            id: 6,
            image: project6,
            github: `${data.github}/QuizApplication`
        },
        {
            id: 8,
            image: more_project,
            github: `${data.github}`
        },
    ]

    return (
        <section className="project section" id="project">
            <h2 className="section-title">Project</h2>

            <div className="project__container bd-grid">
                {
                    projects.map((project) => {
                        return (
                            <a href={project.github} rel="noreferrer" target="_blank" className="project__img" key={project.id}
                                data-aos="zoom-in"
                                data-aos-offset="200"
                                data-aos-duration="1000">
                                <img src={project.image} alt="" />
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project