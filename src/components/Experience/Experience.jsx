import React from 'react';
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils';

export const Experience = () => {
    return (
        <>
            <section className="text-color-text mt-[79px] mx-[15%] max-[830px]:mx-[5%]" id="skills">
                <h2 className="text-white text-heading font-semibold tracking-[1.775px] max-[830px]:text-xxxl max-[830px]:sticky max-[830px]:top-0 max-[830px]:z-[5]">Skills</h2>
                <div className="flex flex-row justify-evenly mt-[14px] p-[20px] max-[830px]:flex-col max-[830px]:items-center">
                    <div className="w-full flex flex-wrap gap-[37px] justify-center max-[830px]:mt-[10px]">{
                        skills.map((skill, id) => {
                            return (
                                <div key={id} className="flex flex-col items-center gap-[11px]">
                                    <div className="bg-transparent rounded-full flex items-center justify-center w-[80px] h-[80px] max-[830px]:w-[40px] max-[830px]:h-[40px]">
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p className="text-blue text-xl font-mono font-medium max-[830px]:text-xs max-[830px]:font-normal">{skill.title}</p>
                                </div>)
                        })}
                    </div>
                </div>
            </section>
            <section className="text-color-text mt-[79px] mx-[15%] max-[830px]:mx-[5%]" id="experience">
                <h2 className="text-white text-heading font-semibold tracking-[1.775px] max-[830px]:text-xxxl max-[830px]:sticky max-[830px]:top-0 max-[830px]:z-[5]">Experience</h2>
                <div className="flex flex-row justify-evenly mt-[14px] p-[20px] max-[830px]:flex-col max-[830px]:items-center">
                    <ul className="w-full max-w-[900px] mx-auto flex flex-col gap-[40px] max-[830px]:gap-[10px]">
                        {
                            history.map((historyItem, id) => {
                                return (
                                    <li key={id} className="flex flex-row items-center gap-[17px] bg-[linear-gradient(90deg,_#19376d_0%,_rgba(25,55,109,0)_100%)] rounded-[10px] p-[24px] max-[830px]:gap-[10px]">
                                        <img className="w-[50px] max-[830px]:w-[30px]" src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                        <div className="font-roboto">
                                            <h3 className="text-[30px] font-medium max-[830px]:text-[23px]">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                            <p className="text-[20px] font-light max-[830px]:text-[17px]">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                            <ul className="mt-[6px] list-disc list-inside text-[25px] ml-[17px] max-[830px]:text-[16px] max-[830px]:ml-0">
                                                {
                                                    historyItem.experiences.map((experience, id) => {
                                                        return <li key={id}>{experience}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}
