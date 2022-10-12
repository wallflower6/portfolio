import React from "react";
import "./Footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodepen} from 'react-icons/si'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">LINDY</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                {/* <li><a href="#about">Home</a></li> */}
                {/* <li><a href="#experience">Experience</a></li> */}
                <li><a href="#services">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li> 
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/lindylim/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/wallflower6" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://codepen.io/wallflower6" target="_blank" rel="noopener noreferrer"><SiCodepen /></a>
            </div>
{/* 
            <div className="footer__copyright">
                <small>&copy; Lindy Lim. All rights reserved.</small>
            </div> */}
        </footer>
    )
}

export default Footer