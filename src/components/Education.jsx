import React from 'react'

const education = [
    {
        id: 1,
        name: "Savitribai Phule Pune University",
        location: "Pune",
        field: "Bachlor's of Engineering",
        subject: "Computer Science",
        start_year: "August 2019",
        end_year: "July 2023",
    },
    {
        id: 2,
        name: "Deogiri College",
        location: "Sambhaji Nagar",
        field: "Class XII",
        subject: "Science",
        start_year: "March 2018",
        end_year: "February 2019",
    },
    // {
    //      id: 3,
    //      name: "Sanskar Vidhyalaya",
    //      location: "Beed",
    //      field: "Class X",
    //      subject: "General",
    //      start_year: "February 2016",
    //      end_year: "March 2017",
    // },
]

const Education = () => {
    return (
        <section className="education section" id="education">
            <h2 className="section-title">Education</h2>

            <div className="education__container bd-grid">
                {
                    education.map((edu) => {
                        return (

                            <div className="education__data" key={edu.id}>
                                <h2 className="education__title">{edu.name}</h2>
                                <div className="education__sub">
                                    <p className="education__text">{edu.location}</p>
                                    <p className="education__text">{edu.start_year} - {edu.end_year}</p>
                                </div>
                                <div className="education__sub">
                                    <p className="education__text">{edu.field}</p>
                                    <p className="education__text">{edu.subject}</p>
                                </div>
                            </div>  

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Education