export const Hero = () => {
    return (
        <section className="relative flex items-start justify-between mt-[65px] z-[1] mx-[15%] max-[830px]:flex-col-reverse max-[830px]:mt-[45px] max-[830px]:mx-[10%]">
            <div className="flex flex-col items-start z-[1]">
                <h1 className="text-blue mb-[30px] ml-[4px] font-mono text-[clamp(14px,5vw,16px)] font-normal leading-[1.1]">Hi, my name is</h1>
                <h2 className="text-[clamp(40px,8vw,80px)] leading-[1.1] font-semibold text-lightest-slate">Michael Corry.</h2>
                <h3 className="mt-[5px] text-slate text-[clamp(40px,8vw,80px)] font-semibold leading-[0.9]">Software Developer.</h3>
                <p className="text-xxl leading-[1.3] text-slate font-sans mt-[20px] mb-[30px] max-w-[60%] max-[830px]:text-lg max-[830px]:mb-[20px] max-[830px]:max-w-full">{`I create functional and visually stunning digital experiences as a full-stack developer specializing in React, Next.js, and Django. Whether building innovative web apps or solving complex problems, I’m here to bring your ideas to life. Let’s turn your vision into impactful results.`}</p>
                <a
                    href='mailto:michaelcorry01@gmail.com'
                    className="mt-[20px] bg-transparent text-blue border border-blue leading-none rounded-[4px] text-xxl font-mono font-semibold py-[17px] px-[26px] no-underline transition-colors duration-200 hover:text-white hover:border-white max-[830px]:text-[25px] max-[830px]:font-medium"
                >
                    Contact Me
                </a>
            </div>
        </section>
    )
}
