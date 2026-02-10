import React from 'react'
export const About = () => {
    return (
        <section className="relative mt-[50px] z-[1] mx-[15%] max-[830px]:mx-[5%] max-[830px]:mt-[10px]" id='about'>
            <div>
                <h2 className="text-white text-heading font-semibold tracking-[1.75px] max-[830px]:text-xxxl">About Me</h2>
            </div>
            <div className="mt-[20px] bg-navy rounded-[10px] border border-blue px-[70px] py-[60px] max-[830px]:px-[15px] max-[830px]:py-[15px]">
                <p className="text-slate text-xxl leading-[1.3] font-sans tracking-[1.2px] max-[830px]:text-lg max-[830px]:leading-[1] max-[830px]:tracking-[1px]">
                    Hi, I’m Michael Corry, a software developer based in Nairobi, Kenya. Nice to meet you.
                    <br /><br />
                    I specialize in both frontend and backend development, including web design, APIs, and backend systems with database integration. Currently I am a freelance developer working with clients to deliver functional, well-crafted digital products.
                    <br /><br />
                    I have a keen in growing my craft and I follow that fueled with my curiosity to wherever it leads me. For more on this you can check out my gihub account.
                    <br /><br />
                    Off the screen, I enjoy exploring philosophy, spirituality, and occasionally reading fiction. Every project I undertake is an opportunity to learn and grow.

                </p>
            </div>
        </section>

    )
}
