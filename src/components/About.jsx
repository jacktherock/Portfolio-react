import React from 'react'


const about =
{
    intro: "I have completed Bachlor's of Engineering Degree in Computer Science from Savitribai Phule Pune University, Pune.",
    desc: "I believe I am an enthusiastic person who genuinely wants to develop the necessary skills and qualities to have a successful career and future. I am genuinely a positive person, I keep myself active, and I want to learn from more experienced people than myself, so I can build the necessary project qualities and traits.",
}


const About = ({ data }) => {
    return (
        <section className="about section " id="about">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img" data-aos="fade-right" data-aos-offset="50" data-aos-duration="1000">
                    <img src={data.about_image} alt="" />
                </div>

                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="1000">
                    <h2 className="about__subtitle">
                        <span style={{ fontSize: "medium", fontWeight: "normal" }}>I am </span>{data.first_name} {data.last_name}
                    </h2>

                    <p className="about__text">
                        {about.intro}
                        <br />
                        <br />
                        {about.desc}
                        <br />
                        <br />
                        <span style={{ fontSize: "1.5rem", color: "#3E6FF4" }}>@</span>
                        <a href={`mailto:${data.mail}`}
                            style={{ color: "#0D1730" }}> {data.mail}
                        </a>
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About