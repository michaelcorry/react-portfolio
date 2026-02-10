import React from 'react'
export const Resume = () => {
  return (
    <section className="relative mt-[50px] z-[1] mx-[15%] max-[830px]:mt-[10px] max-[830px]:mx-[5%]" id="resume">
      <div>
        <h2 className="text-white text-heading font-semibold tracking-[1.75px]">Resume</h2>
      </div>
      <div className="mt-[20px]">
        <div className="bg-navy rounded-[12px] border border-blue px-[50px] py-[40px] max-[830px]:px-[18px] max-[830px]:py-[18px]">
          <p className="text-slate text-xxl leading-[1.4] font-sans tracking-[1.1px] mb-[25px] max-[830px]:text-lg max-[830px]:leading-[1.2]">
            Download a copy of my resume or open it in a new tab. If you need a
            tailored version for a role, just reach out.
          </p>
          <div className="flex gap-[16px] flex-wrap">
            <a className="inline-flex items-center justify-center px-[20px] py-[12px] rounded-[8px] font-mono text-sm tracking-[1px] no-underline transition-transform duration-200 shadow-[0_8px_20px_rgba(100,255,218,0.2)] bg-green text-dark-navy hover:-translate-y-[2px] hover:shadow-[0_12px_26px_rgba(100,255,218,0.28)]" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="inline-flex items-center justify-center px-[20px] py-[12px] rounded-[8px] font-mono text-sm tracking-[1px] no-underline transition-transform duration-200 border border-blue text-white bg-transparent hover:-translate-y-[2px] hover:bg-[rgba(87,203,255,0.1)]" href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
