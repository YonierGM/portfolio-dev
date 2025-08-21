
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

import './Redes.css';

export function Redes(){
    return (
        <>
        <div className="redes flex gap-4 items-center bg-white hover:shadow-md transition-shadow duration-300 p-2 w-auto rounded-2xl">
            <a href="https://www.linkedin.com/in/yoniergm/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-2xl icon text-black hover:text-[rgba(10,102,194,1)] transition-colors duration-300" /></a>
            <a href="https://www.youtube.com/@JhonnierGM" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-2xl icon text-black hover:text-[rgba(255,0,0,1)] transition-colors duration-300" /></a>
            <a href="https://github.com/YonierGM" target="_blank" rel="noopener noreferrer"><RiGithubLine className="text-2xl icon text-black hover:text-[rgba(0,0,0,1)] transition-colors duration-300" /></a>
            {/* <a href="https://www.instagram.com/jhonnier.gm/" target="_blank" rel="noopener noreferrer"><FaSquareInstagram className="icon" /></a> */}
        </div>
</>
    )
}