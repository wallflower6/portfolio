import React from "react";
import "./Portfolio.css"
import CS461 from "../../assets/CS461.pdf"
import CS421 from "../../assets/CS421.pdf"
import CS421_CODE from "../../assets/CS421-CODE.ipynb"
import CS426 from "../../assets/CS426.pdf"

const data = [
    {
        id: 0,
        title: "APAC Cyber Threat Intelligence Feed (with UBS) - Ongoing",
        desc: "Final-year project. Working on the frontend to display STIX-formatted data obtained from backend services and graphs related to cyber threat intelligence. In partnership with UBS Singapore.",
        skills: ["React", "D3", "Jira", "Docker", "School"]
    },

    {
        id: 1,
        title: "Anon",
        desc: "A simple narrative game where you learn basic OSINT skills and apply them to track down your missing friend. Role: Developed game idea, built Levels 1 and 2, conducted OSINT research, gathered feedback from playtesters.",
        repo: "https://github.com/venushmallow/Anon",
        demo: "https://venushmallow.github.io/Anon/",
        skills: ["Unity", "C#", "School"]
    },

    {
        id: 6,
        title: "Middleware Application (with COMO Club)",
        desc: "Middleware application using client's APIs to bridge client's services. Role: Helped architect solution, wrote CloudFormation (IaC) templates and built part of the application.",
        repo: "https://github.com/wallflower6/CS301-project",
        report: "https://github.com/wallflower6/CS301-project/tree/main/project-report",
        skills: ["Java", "Springboot", "AWS", "School"]
    },

    {
        id: 4,
        title: "Labour Market NetLogo Simulation",
        desc: "Simulation of the effects of Singapore’s foreign labour policies on local employment rates. Worked in a team of 2.",
        repo: "https://github.com/wallflower6/ABMS-Project/blob/main/Model-Final.nlogo",
        report: CS426,
        skills: ["NetLogo", "Game Theory", "School"]
    },

    {
        id: 7,
        title: "Identifying Phishing Sites",
        desc: "A machine learning project to try different classifiers on a phishing dataset to see which yields the best result. Role: Built and optimized a Random Forest Classfier.",
        repo: CS421_CODE,
        report: CS421,
        skills: ["ML", "Python", "scikit-learn", "School"]
    },

    {
        id: 8,
        title: "Theme Park Navigation Mobile Application",
        desc: "A mobile app made with Android Studio which utilizes Bluetooth Low Energy (BLE) to detect beacons and assist with navigation in a theme park. Role: Built beacon detection with Android Beacon Library.",
        repo: "https://github.com/sinyeekw/TheCS461GuideToTheGalaxy",
        report: CS461,
        skills: ["Android", "Kotlin", "School"]
    },

    {
        id: 9,
        title: "Stripe Payment Microservice",
        desc: "Part of a project to gain expertise with GitLab CI/CD and DevOps tools. Role: Developed payment microservice with Stripe integration, built CI/CD pipeline for payment microservice.",
        repo: "https://github.com/wallflower6/CS302-project",
        skills: ["Java", "Springboot", "Docker", "School"]
    },

    {
        id: 2,
        title: "Housemates from Hell",
        desc: "A very simple game made for GMTK Game Jam 2021 (theme: Joined Together) in under 48 hours using free assets from Kenney and OpenGameArt. For MacOS.",
        repo: "undefined",
        demo: "https://wallflower6.itch.io/housemates-from-hell",
        skills: ["Unity", "C#", "Personal"]
    },

    {
        id: 3,
        title: "Lame Space Collector",
        desc: "Collect stars and gems in a spacecraft but keep an eye out for asteroids! Inspired by snake, a project to try some beginner's independent work in Unity.",
        repo: "https://github.com/wallflower6/LameSpaceCollector",
        demo: "https://wallflower6.github.io/LameSpaceCollector/",
        skills: ["Unity", "C#", "Personal"]
    },

    {
        id: 10,
        title: "Toothless (CSS)",
        desc: "Toothless from Dreamworks' How To Train Your Dragon, made with CSS. A simple project to celebrate the release of the third film, The Hidden World in 2019.",
        repo: "https://codepen.io/wallflower6/pen/MLmJLj",
        demo: "https://codepen.io/wallflower6/full/MLmJLj",
        skills: ["CSS", "HTML", "jQuery", "Personal"]
    },

    {
        id: 11,
        title: "Tribute Page",
        desc: "A tribute page to Alan Turing, made as a freeCodeCamp project. The UI was inspired by the Bletchley Park bombe, but greyed out.",
        repo: "https://github.com/wallflower6/tribute-page",
        demo: "https://wallflower6.github.io/tribute-page/",
        skills: ["HTML", "CSS", "Personal"]
    },

    {
        id: 15,
        title: "Ryver Bank (with Credit Suisse)",
        desc: "A simple trading application as an introduction to Springboot and building REST APIs. Role: Built accounts and CMS.",
        repo: "https://github.com/CS203-project/monolithic",
        skills: ["Maven", "Springboot", "REST", "School"]
    },

    {
        id: 5,
        title: "Bookstore E-Commerce Application - Ongoing",
        desc: "Project for Cloud Management & Engineering. Working in a team to integrate a microservices application with AWS cloud services.",
        skills: ["AWS", "School"]
    },

    {
        id: 12,
        title: "Blender: Room",
        desc: "Followed Polygon Runway's tutorial. Brushed up on 3D modelling, and learned basic lighting and image texturing in Blender.",
        demo: "https://drive.google.com/file/d/11UNg1f4jv8kKnTb0jAIgYYGEUfjUJaXr/view?usp=sharing",
        skills: ["Blender", "Modelling", "Texturing", "Personal"]
    },

    {
        id: 13,
        title: "Blender: Sword Scene",
        desc: "Followed CG Fast Track's tutorial series. I got to brush up on 3D modelling, learned to use HDRIs, imported assets, was introduced to composition.",
        demo: "https://drive.google.com/file/d/1y6MLLDpA7E_KcbsmwT67G7lxyGq0-ecc/view?usp=sharing",
        skills: ["Blender", "Texturing", "Lighting", "Personal"]
    },

    {
        id: 14,
        title: "Blender: Doughnut",
        desc: "Yes, I also started learning Blender with Blender Guru's doughnut tutorial! This was my first attempt in 2019 at learning Blender, 3D modelling, texturing and lighting. I also contributed to Blender Guru's NFT.",
        demo: "https://drive.google.com/file/d/1np4tHk0nE_ebUuQckdqy7Wz482BCKMK5/view?usp=sharing",
        skills: ["Blender", "Texturing", "Lighting", "Personal"]
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Past & Present Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, title, desc, repo, demo, report, skills}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                
                                <h3>{title}</h3>
                                <p>{desc}</p>
                                <div className="portfolio__item-skills">
                                    {skills.map((skill) => {
                                        return (
                                            <small>{skill}</small>
                                        )
                                    })}
                                </div>
                                <div className="portfolio__item-cta">
                                    {repo != null ? (<a href={repo} className="btn" target="_blank" rel="noopener noreferrer">Code</a>) : (<></>)}
                                    {demo != null ? (<a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>) : (<></>)}
                                    {report != null ? (<a href={report} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Report</a>) : (<></>)}
                                </div>  
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio