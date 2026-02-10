import React from 'react'
import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    return (
        <section className="mt-[76px] mx-[15%] max-[830px]:mt-0 max-[830px]:mx-[5%] max-[830px]:pb-[40px] max-[830px]:overflow-x-auto" id="projects">
            <div className="max-[830px]:sticky max-[830px]:top-[40px]" >
                <h2 className="text-white text-heading font-bold tracking-[1.75px] pb-[20px] max-[830px]:text-xxxl">Projects</h2>
            </div>
            <div className="mt-[37px] flex flex-row flex-wrap gap-[30px] w-full">{
                projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    )
                })}
            </div>
        </section>
    )
}
