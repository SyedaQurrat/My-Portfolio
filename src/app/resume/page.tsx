'use client';

import React from 'react';
import Image from 'next/image';

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a23] text-white px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-[#e5b970] mb-8">
        My Resume
      </h1>

      <div className="w-64 md:w-80 lg:w-96 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 rounded-lg overflow-hidden">
        <Image
          src="/images/ehomojlp.png" 
          alt="Resume"
          width={800} 
          height={1000}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Resume;
