import React from "react";
import "./Nav.css"
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {FaBuromobelexperte} from 'react-icons/fa'

import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active": ""}>
                <AiOutlineHome />
            </a>
            {/* <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active": ""}>
                <AiOutlineHome />
            </a> */}
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active": ""}>
                <FaBuromobelexperte />
            </a>
            {/* <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active": ""}>
                <FaBuromobelexperte />
            </a> */}
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active": ""}>
                <BiBook />
            </a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active": ""}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav