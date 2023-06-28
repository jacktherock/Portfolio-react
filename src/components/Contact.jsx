import React from 'react'

const Contact = ({ data }) => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__social bd__grid" data-aos="zoom-in-up" data-aos-duration="1000">
                <a href={data.linkedin} className="contact__icon home__social-icon" rel="noreferrer" target="_blank">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href={data.github} className="contact__icon home__social-icon" rel="noreferrer" target="_blank">
                    <i className='bx bxl-github'></i>
                </a>
                <a href={`mailto:${data.mail}`} className="contact__icon home__social-icon">
                    <i className='bx bxl-gmail'></i>
                </a>
                <a href={data.location}
                    className="contact__icon home__social-icon" rel="noreferrer" target="_blank">
                    <i className='bx bxs-map'></i>
                </a>
                {/* <a href={data.siteLink} className="contact__icon home__social-icon">
                    <i className='bx bx-world'></i>
                </a> */}
            </div>
        </section>
    )
}

export default Contact