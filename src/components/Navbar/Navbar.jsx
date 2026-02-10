import React, { useState } from "react";
import { getImageUrl } from "../../utils"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="relative flex items-center justify-between pt-[21px] z-[2] mx-[10%] max-[830px]:flex-col max-[830px]:items-start max-[830px]:pt-[30px] max-[830px]:mx-[5%]">
            <a className="max-[830px]:-mt-[13px]" href="/">
                <img className="max-w-[30%] max-[830px]:max-w-[70%]" src={getImageUrl("nav/brand.png")} alt="Michael Corry Logo" />
            </a>
            <div className="flex max-[830px]:absolute max-[830px]:right-0 max-[830px]:flex-col max-[830px]:items-end max-[830px]:gap-[11px] max-[830px]:z-[3]">
                {menuOpen ? <IoCloseOutline onClick={() => setMenuOpen(!menuOpen)} className="hidden max-[830px]:block cursor-pointer" size="35px" color="white" /> : <HiOutlineMenuAlt3 onClick={() => setMenuOpen(!menuOpen)} className="hidden max-[830px]:block cursor-pointer" size="35px" color="white" />}
                <ul
                    className={`list-none gap-[30px] hidden min-[831px]:flex ${menuOpen ? 'max-[830px]:flex' : 'max-[830px]:hidden'} max-[830px]:flex-col max-[830px]:items-end max-[830px]:gap-[13px] max-[830px]:rounded-[10px] max-[830px]:bg-[linear-gradient(0deg,_rgba(25,55,109,0.2)_0%,_rgba(25,55,109,1)_100%)] max-[830px]:px-[33px] max-[830px]:py-[23px] max-[830px]:shadow-[0_0_4px_0_rgba(0,0,0,0.25)]`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a className="text-blue no-underline font-mono text-xl max-[830px]:text-md hover:text-white" href="#about">About</a>
                    </li>
                    <li>
                        <a className="text-blue no-underline font-mono text-xl max-[830px]:text-md hover:text-white" href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className="text-blue no-underline font-mono text-xl max-[830px]:text-md hover:text-white" href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className="text-blue no-underline font-mono text-xl max-[830px]:text-md hover:text-white" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="text-blue no-underline font-mono text-xl max-[830px]:text-md hover:text-white" href="#resume">Resume</a>
                    </li>
                    <li>
                        <a className="text-blue no-underline font-mono text-xl max-[830px]:text-md hover:text-white" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
