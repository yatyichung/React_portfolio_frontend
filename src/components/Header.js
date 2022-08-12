import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
    return (
        <div id="header" className="text-white py-5">
            <h1 className="text-center text-uppercase">Sunny Chung</h1>
            <p className="text-center h5 ">Full Stack Web Developer based in Toronto, Canada</p>
            <div className="text-center" id="icon">
                <a href="https://github.com/yatyichung"><FaGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/yatyichung/"><FaLinkedin size={30} /></a>
                <a href="mailto:chungyatyisunny@gmail.com"><FaEnvelope size={30} /></a>
            </div>
        </div>
    )
}


