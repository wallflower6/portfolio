import React, { useRef } from 'react';
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>lindylimlw@gmail.com</h5>
                        <a href="mailto:lindylimlw@gmail.com" target="_blank" rel="noopener noreferrer">Send an email</a>
                    </article>
                    {/* END OF ARTICLE */}

                    <article className="contact__option">
                        <BsTelegram className="contact__option-icon" />
                        <h4>Telegram</h4>
                        <h5>@lindy_98</h5>
                        <a href="https://t.me/lindy_98" target="_blank" rel="noopener noreferrer">Send a Telegram message</a>
                    </article>
                    {/* END OF ARTICLE */}

                    <article className="contact__option">
                        <FaGithub className="contact__option-icon" />
                        <h4>GitHub</h4>
                        <h5>wallflower6</h5>
                        <a href="https://github.com/wallflower6" target="_blank" rel="noopener noreferrer">View GitHub repository</a>
                    </article>
                    {/* END OF ARTICLE */}

                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>Lindy Lim</h5>
                        <a href="https://www.linkedin.com/in/lindylim/" target="_blank" rel="noopener noreferrer">Send a LinkedIn message</a>
                    </article>
                    {/* END OF ARTICLE */}
                </div>
            </div>
        </section>
    )
}

export default Contact