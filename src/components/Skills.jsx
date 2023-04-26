import React from 'react'

const skills_left = [
    {
        id: 1,
        icon_name: "bxl-c-plus-plus",
        skill_name: "C++",
    },
    {
        id: 2,
        icon_name: "bxl-python",
        skill_name: "PYTHON",
    },
    {
        id: 3,
        icon_name: "bxl-html5",
        skill_name: "HTML",
    },
    {
        id: 4,
        icon_name: "bxl-css3",
        skill_name: "CSS",
    },
    {
        id: 5,
        icon_name: "bxl-javascript",
        skill_name: "JAVASCRIPT",
    },
    {
        id: 6,
        icon_name: "bxs-data",
        skill_name: "MYSQL",
    },

]

const skills_right = [
    {
        id: 1,
        icon_name: "bxl-django",
        skill_name: "DJANGO",
    },
    {
        id: 2,
        icon_name: "bxl-react",
        skill_name: "REACT JS",
    },
    {
        id: 3,
        icon_name: "bxl-bootstrap",
        skill_name: "BOOTSTRAP",
    },
    {
        id: 4,
        icon_name: "bxl-tailwind-css",
        skill_name: "TAILWIND CSS",
    },
    {
        id: 5,
        icon_name: "bxs-bar-chart-square",
        skill_name: "MACHINE LEARNING",
    },
]


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">

                <div>
                    {
                        skills_left.map((sl) => {
                            return (
                                <div key={sl.id}>
                                    {/* <h2 className="skills__subtitle"></h2> */}
                                    {/* <p className="skills__text"></p> */}

                                    <div className="skills__data" key={sl.id}>
                                        <div className="skills__names">
                                            <i className={`bx ${sl.icon_name} skills__icon`}></i>
                                            <span className="skills__name">{sl.skill_name}</span>
                                        </div>
                                        <div className="skills__bar skills__html"></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        skills_right.map((sr) => {
                            return (
                                <div key={sr.id}>
                                    {/* <h2 className="skills__subtitle"></h2> */}
                                    {/* <p className="skills__text"></p> */}

                                    <div className="skills__data" >
                                        <div className="skills__names">
                                            <i className={`bx ${sr.icon_name} skills__icon`}></i>
                                            <span className="skills__name">{sr.skill_name}</span>
                                        </div>
                                        <div className="skills__bar skills__html">
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills