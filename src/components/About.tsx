'use client';
const About: React.FC = () => {
    return (
        <div className="bg-[#f1c886] text-[#072638] xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-20 p-10 border-b border-zinc-300 pb-10 rounded-xl shadow-lg">
            <h1 className="text-center text-[#072638] xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] mt-2">
                About me!
            </h1>
            <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-center px-4 sm:px-10">
                I'm Syeda Qurrat, a passionate web developer skilled in HTML5, CSS3, taiwind css, JavaScript, and TypeScript. I enjoy creating user-friendly web applications and constantly improving my coding techniques. Recently, I’ve started exploring Next.js, which has sharpened my ability to build fast, scalable web applications. With features like server-side rendering and static site generation, I look forward to creating dynamic and SEO-friendly websites that deliver seamless user experiences.
            </p>
        </div>
    );
};

export default About;
