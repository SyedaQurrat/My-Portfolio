'use client';
import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
  return (
    <div className="bg-[#123042] flex flex-col justify-center p-10 min-h-screen">
      <div className="bg-[#072638] xl:w-[1300px] w-full p-24 border-20">
        <h1 className="lg:text-4xl text-center sm:text-4xl text-2xl text-[#f1c886] font-extrabold mt-10">
          Projects
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 mt-10">
          <a className="hover:scale-105 duration-200 transition-all" href="https://saon-website.vercel.app/">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Salon-Website"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/Salon-Website.jpg"
                  width={500} 
                  height={250} 
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Salon-Website</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://governor-web-site-toa4.vercel.app/">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Governor Sindh Website"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/Governor-Sindh-Website.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Governor Sindh Website</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://milestone-4-resume-builder.vercel.app/">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Resume Builder"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/Resume.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Resume Builder</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://to-do-app-in-react-pi.vercel.app/">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="To-Do-App"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/To-Do-App.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>To-Do-App</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://github.com/SyedaQurrat/TypeScript-Assignments.git">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Assignment-45"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/Assignment-45.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Assignment-45</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="#">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Result Checker App"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/result-Checker app.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Result Checker App</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://github.com/SyedaQurrat/ATM-machine.git">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Node Projects"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/Node-Projects.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Node Projects</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://code-alpha-expense-tracker-seven.vercel.app/">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Expense Tracker App"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/Expense-Tracker-App.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Expense Tracker App</span>
              </div>
            </div>
          </a>

          <a className="hover:scale-105 duration-200 transition-all" href="https://word-counter-phi-ivory.vercel.app/">
            <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  alt="Word Counter"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/images/word-Counter.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className="text-[#f1c886] px-4 flex justify-center items-center h-[70px]">
                <span>Word Counter</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
