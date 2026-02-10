import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <a href="/">
                <img className={styles.logo} src={getImageUrl("nav/brand.png")} alt="Michael Corry Logo" />
            </a>
            <div className={styles.menu}>
                {menuOpen ? <IoCloseOutline onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn} size="35px" color="white" /> : <HiOutlineMenuAlt3 onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn} size="35px" color="white" />}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
