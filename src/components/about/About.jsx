import React from "react";
import "./About.css"
import ME from "../../assets/me-about.png"
import {FaBuromobelexperte} from 'react-icons/fa'
import CTA from "../header/CTA"

const About = () => {
    return (
        <section id="">
            {/* <h5>Get To Know</h5>
            <h2>About Me</h2> */}
            <h5>Hello, I'm</h5>
            <h2>Lindy Lim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    {/* <div className="about__cards">
                        <article className="about__card">
                            <FaBuromobelexperte className="about__icon"/>
                            <h5>Autodidact</h5>
                            <small>Self-taught in multiple skills</small>
                        </article>

                        <article className="about__card">
                            <FaBuromobelexperte className="about__icon"/>
                            <h5>Mentor</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <FaBuromobelexperte className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+</small>
                        </article>
                    </div> */}

                    <p>
                        Final-year student at Singapore Management University (under the ASEAN Undergraduate Scholarship, graduating August 2023). Previous internship experience in game development, seeking future opportunities also in game development but also in cloud / software architecture or full-stack web development. Current personal projects include a casual mobile game. Currently learning C++ and Unreal Engine, and studying for the AWS Solutions Architect - Associate certification.
                    </p>

                    <CTA />

                    {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
                </div>
            </div>
        </section>
    )
}

export default About