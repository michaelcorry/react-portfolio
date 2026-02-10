import React, { useState, useEffect } from 'react'
import GithubLogo from './GithubLogo';
import LinkedinLogo from './LinkedinLogo'
import GmailLogo from './GmailLogo'

export const Contact = () => {
    const blue = '#57cbff'
    const primary = '#8892b0'
    let width = "50px"
    let height = "50px"
    const mobileWidth = "30px"
    const mobileHeight = "30px"
    let [gitIconColor, setGitIconColor] = React.useState(primary);
    let [gmailIconColor, setGmailIconColor] = React.useState(primary);
    let [linkedinIconColor, setLinkedinIconColor] = React.useState(primary);
    let [textColor, setTextColor] = React.useState(primary);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (screenWidth <= 830) { width = mobileWidth; height = mobileHeight }

    return (
        <footer id='contact' className="relative text-white flex flex-col items-center mx-[10%] h-auto p-[30px] max-[830px]:pt-[10px] max-[830px]:pb-[20px] max-[830px]:mx-0">
            <div className="flex flex-col items-center gap-[20px]">
                <h2 className="text-lightest-slate text-[40px] font-bold tracking-[4px] max-[830px]:text-[30px]">Contact</h2>
                <p className="text-slate text-xl font-normal tracking-[2px] max-[830px]:text-md max-[830px]:tracking-[1px]">Feel free to reach out</p>
            </div>
            <ul className="flex flex-row list-none gap-[50px] mt-[10px] mb-[10px] max-[830px]:m-[10px] max-[830px]:items-center max-[830px]:gap-[25px]">
                <li className="flex">
                    <a href="mailto:michaelcorry01@gmail.com" onMouseOver={() => setGmailIconColor(blue)}
                        onMouseOut={() => setGmailIconColor(primary)}>
                        <GmailLogo stroke={gmailIconColor} width={width} height={height}
                        />
                    </a>
                </li>
                <li className="flex">
                    <a href="https://www.linkedin.com/in/michaelcorry1" onMouseOver={() => setLinkedinIconColor(blue)}
                        onMouseOut={() => setLinkedinIconColor(primary)}>
                        <LinkedinLogo stroke={linkedinIconColor} width={width} height={height} />
                    </a>
                </li>
                <li className="flex">
                    <a href="https://www.github.com/corryjnr" onMouseOver={() => setGitIconColor(blue)}
                        onMouseOut={() => setGitIconColor(primary)}>
                        <GithubLogo stroke={gitIconColor} width={width} height={height} />
                    </a>
                </li>
            </ul>
            <a href="https://github.com/corryjnr/react-portfolio" className="font-mono text-md text-slate leading-none cursor-pointer p-[10px] no-underline tracking-[2px] max-[830px]:text-sm">
                <p onMouseOver={() => setTextColor(blue)} onMouseOut={() => setTextColor(primary)} style={{ color: textColor }}>
                    Designed & Built by Michael Corry
                </p>
            </a>
        </footer>
    )
}
