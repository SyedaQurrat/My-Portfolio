'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#1f435a] w-full text-[#f1c886] py-20 px-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 ">

        {/* Column 1: Core Courses Section */}
        <div className="text-[#f1c886] ml-3">
          <h1 className="text-xl font-bold text-[#f1c886]">Websites</h1>
          <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
            <a className="truncate hover:text-white" href="https://saon-website.vercel.app/">SQ Salon</a>
            <a className="truncate hover:text-white" href="https://governor-web-site-toa4.vercel.app/">Governor Sindh Website</a>
            <a className="truncate hover:text-white" href="#">Portfolio</a>

            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <h1 className="text-xl font-bold text-[#f1c886]">App</h1>
              <a className="truncate hover:text-white" href="/compulsory/3">Resume Builder</a>
              <a className="truncate hover:text-white" href="/compulsory/3">To-Do-App</a>
              <a className="truncate hover:text-white" href="/compulsory/3">Result Checker App</a>
              <a className="truncate hover:text-white" href="/compulsory/3">Expense Tracker App</a>
              <a className="truncate hover:text-white" href="/compulsory/3">Word Counter</a>
            </div>
          </div>
        </div>
        
        {/* Column 2: Advance Courses */}
        <div>
          <h2 className="text-xl font-bold mb-4">Node Projects</h2>
          <ul className="text-[#f1c886] space-y-2">
            <li><a href="https://github.com/SyedaQurrat/BMI-Calculater.git" className="hover:text-white">BMI-Calculater</a></li>
            <li><a href="https://github.com/SyedaQurrat/OOP_MY_BANK.git" className="hover:text-white">OOP_MY_BANK</a></li>
            <li><a href="https://github.com/SyedaQurrat/Object-Oriente_-Programming.git" className="hover:text-white">Object-Oriente_-Programming</a></li>
            <li><a href="https://github.com/SyedaQurrat/COUNTDOWN_TIMER.git" className="hover:text-white">COUNTDOWN_TIMER</a></li>
            <li><a href="https://github.com/SyedaQurrat/Advanture_Game.git" className="hover:text-white">Advanture_Game</a></li>
            <li><a href="https://github.com/SyedaQurrat/Students_Mannagement_System.git" className="hover:text-white">Students_Mannagement_System</a></li>
            <li><a href="https://github.com/SyedaQurrat/currency_converter.git" className="hover:text-white">currency_converter</a></li>
            <li><a href="https://github.com/SyedaQurrat/ATM-machine.git" className="hover:text-white">ATM-machine</a></li>
            <li><a href="https://github.com/SyedaQurrat/Cli-Number-Gassing-Game.git" className="hover:text-white">Cli-Number-Gassing-Game</a></li>
            <li><a href="https://github.com/SyedaQurrat/simple-calculation-station.git" className="hover:text-white">Simple Calculater</a></li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#f1c886]">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#f1c886]" />
                <a href="#" className="text-lg hover:text-white transition duration-200">qurratnafees02@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#f1c886]" />
                <a href="tel:+1234567890" className="text-lg hover:text-white transition duration-200">+92 3302413208</a>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-[#f1c886]" />
                <a href="https://github.com/SyedaQurrat" className="text-lg hover:text-white transition duration-200">https://github.com/SyedaQurrat</a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-[#f1c886]" />
                <a href="https://www.linkedin.com/in/syeda-qurrat1991" className="text-lg hover:text-white transition duration-200">www.linkedin.com/in/syeda-qurrat1991</a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
