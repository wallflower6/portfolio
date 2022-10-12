import React from "react";
import "./Services.css"
import {BsXDiamondFill} from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h5>What I've Done</h5>
            <h2>Work Experience</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Research Intern (Virtual Reality)</h3>
                        <h5>Singapore Management University</h5>
                        <h5 className="service__head-ital">May 2022 - Aug 2022</h5>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Lead the development of a Virtual Reality (VR) game in Unity Engine from concept to deployment based on client's requirements </p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Collaborated with a supervisor / professor to architect project to ensure extensibility and modularity</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Wrote gameplay logic in C# for main functionality (ie. main menus, scoring system, AI for NPC behaviour, additional VR logic)</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Created and modified game assets in Blender, including materials, textures, and animations</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Deployed prototype application for Oculus Quest 2</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Prepared documentation and user guide for project</p>
                        </li>
                    </ul>
                </article>
                {/* END OF ARTICLE */}

                <article className="service">
                    <div className="service__head">
                        <h3>Developer Intern</h3>
                        <h5>Big 3 Media</h5>
                        <h5 className="service__head-ital">May 2021 - Aug 2021</h5>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Prototyped a 3D virtual tour for the web with ThreeJS</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Created AR experiences in SparkAR for potential commercial purposes</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Created and modified game assets in Blender for usage in AR projects</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Wrote gameplay logic in C# for a character select menu for an upcoming game</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Prototyped simple point-and-click games with Construct 3</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Prototyped an exploratory panoramic webpage with Marzipano and JavaScript</p>
                        </li>
                    </ul>
                </article>
                {/* END OF ARTICLE */}

                <article className="service">
                    <div className="service__head">
                        <h3>IT Intern</h3>
                        <h5>Air Liquide Business Services</h5>
                        <h5 className="service__head-ital">Apr 2019 - May 2019</h5>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Set up and populated LumApps intranet pages with internal information for easy access by staff</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Prototyped a chatbot with Dialogflow for internal communication and faster information accessibility</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Worked with international colleagues to improve presentability of intranet site</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Project received an internal award for increasing staff productivity</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Assisted with data cleaning efforts to speed up and automate process</p>
                        </li>
                        <li>
                            <BsXDiamondFill className="service__list-icon" />
                            <p>Troubleshot office equipment such as televisions</p>
                        </li>
                    </ul>
                </article>
                {/* END OF ARTICLE */}
            </div>
        </section>
    )
}

export default Services