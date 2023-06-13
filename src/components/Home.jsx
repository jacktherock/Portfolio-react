import React from 'react'

const home = {
    job_title: "React Developer",
}

const Home = ({ data }) => {
    return (
        <section className="home bd-grid" id="home" >

            <div className="home__data" data-aos="zoom-in-right" data-aos-duration="1000">
                <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">{data.first_name}</span><br /> {home.job_title}
                </h1>

                <a href={data.resumePdf} className="button" rel="noreferrer" target="_blank">Resume</a>

            </div>

            <div className="home__social" data-aos="zoom-in-left" data-aos-duration="1000">
                <a href={data.linkedin} className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className='bx bxl-linkedin'></i></a>
                <a href={data.github} className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className='bx bxl-github'></i>
                </a>
                {/* <a href={data.leetcode} className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className='bx bx-code-alt'></i>
                </a>
                <a href={data.hackerrank} className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className='bx bx-code-curly' ></i>
                </a> */}
            </div>

            <div className="home__img" data-aos="zoom-in-left" data-aos-duration="1000">
                <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0" mask-type="alpha">
                        <path
                            d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                    </mask>
                    <g mask="url(#mask0)">
                        <path
                            d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                        <image className="home__blob-img" x="60" y="50" href={data.home_image} />
                    </g>
                </svg>
            </div>

        </section>
    )
}

export default Home