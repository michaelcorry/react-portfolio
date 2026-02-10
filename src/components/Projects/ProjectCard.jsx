import React, { useState, useEffect } from 'react'
import { getImageUrl } from '../../utils'
import GithubLogo from './GithubLogo';

export const ProjectCard = ({ project: { title, imageSrc, skills, description, demo, source } }) => {
    const blue = '#57cbff'
    const primary = '#e6f1ff'
    let width = "40px"
    let height = "40px"
    const mobileWidth = "30px"
    const mobileHeight = "30px"
    let [gitIconColor, setGitIconColor] = React.useState(primary);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (screenWidth <= 830) { width = mobileWidth; height = mobileHeight }
    return (
        <a href={demo} className="block no-underline">
            <div className="flex flex-row rounded-[10px] px-[24px] py-[18px] cursor-pointer items-center hover:bg-navy max-[830px]:p-[10px] max-[830px]:max-w-full max-[830px]:flex-col max-[830px]:cursor-default max-[830px]:bg-navy" >
                <div className="max-w-[40%] mr-[50px] h-auto max-[830px]:max-w-full max-[830px]:m-0">
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className="max-w-full h-auto rounded-[4px] max-[830px]:mb-[10px] max-[830px]:w-full" />
                </div>
                <div>
                    <h3 className="text-xxl font-bold text-white max-[830px]:text-lg">{title}</h3>
                    <p className="mt-[6px] text-lg font-normal text-lightest-slate max-[830px]:mt-[2px] max-[830px]:text-sm">{description}</p>
                    <ul className="w-full mt-[18px] flex flex-row flex-wrap gap-[6px] list-none justify-start max-[830px]:justify-center">
                        {skills.map((skill, id) => {
                            return (<li key={id} className="text-sm font-normal rounded-[100px] bg-[rgba(94,234,212,0.1)] text-[rgba(94,234,212,1)] px-[22px] py-[2px] max-[830px]:text-xs max-[830px]:px-[13px]">
                                {skill}
                            </li>
                            )
                        })}
                    </ul>
                    <div className="items-center justify-center mt-[20px] flex max-[830px]:w-full max-[830px]:mt-[22px] max-[830px]:mb-[10px]">
                        <a href={source} className="no-underline" onMouseOver={() => setGitIconColor(blue)}
                            onMouseOut={() => setGitIconColor(primary)}>
                            <GithubLogo stroke={gitIconColor} width={width} height={height} />
                        </a>
                    </div>
                </div>
            </div>
        </a >
    )
}
