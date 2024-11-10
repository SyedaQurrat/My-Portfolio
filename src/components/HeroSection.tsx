'use client';

import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative mt-10 z-0 w-full overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[url('/images/bg.png')]">
      {/* Background Overlay */}
      <div className="absolute inset-0 -z-50 h-full w-full bg-[#072638] bg-opacity-10"></div>

      <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
        <div className="h-fit w-full pt-5 md:w-1/2 md:py-10">
          <h1 className="whitespace-nowrap text-center text-[#f1c886] text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
            Hi,
          </h1>
          <h1 className="whitespace-nowrap text-[#f1c886] text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
            I am Syeda Qurrat-ul-Ain
          </h1>
          <h1 className="mt-5 whitespace-nowrap text-[#f1c886] text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
            Navigating Code & Intelligence <br /> Next.js, TypeScript & AI Enthusiast
          </h1>
          <p className="my-5 w-full text-[#f1c886] text-center text-[1.25rem] tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">
            Passionate about building seamless user experiences with Next.js and TypeScript. Let’s collaborate!
          </p>
          <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
            <a className="w-full md:w-auto" href="/contact">
              <button className="w-full rounded-md bg-[#f1c886] py-2 text-center text-sm font-semibold tracking-widest text-[#072638] transition-all hover:translate-y-1 sm:py-3 sm:text-base md:w-52">
                Hire Me
              </button>
            </a>
            <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
              <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                <a className="w-full md:w-auto" href="/resume">
                  <button className="w-full rounded-md bg-[#f1c886] py-2 text-center text-sm font-semibold tracking-widest text-[#072638] transition-all hover:translate-y-1 sm:py-3 sm:text-base md:w-52">
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image  */}
        <div className="relative mt-7 flex w-full items-end justify-end md:m-auto md:justify-end">
          <Image
            alt="Syeda Qurrat"
            src="/images/image-6.png"
            width={600}
            height={800}
            className="md:ml-24 h-auto max-w-full object-contain opacity-90"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
