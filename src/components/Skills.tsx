'use client';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPeopleArrows, FaLightbulb, FaHandshake, FaClock } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <div className=" text-[#f1c886] xl:w-[1300px] lg:w-[90%] w-[95%] mx-auto mt-10 mb-10 p-10 rounded-lg shadow-lg">
      <h1 className="text-center text-4xl font-extrabold mb-8">My Skills</h1>

      {/* Technical Skills Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Technical Skills:</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaHtml5 className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">HTML5</h3>
              <p>Expertise in building responsive web layouts with semantic HTML5.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaCss3Alt className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">CSS3</h3>
              <p>Proficient in styling and animations using CSS3 and preprocessors.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaJsSquare className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">JavaScript</h3>
              <p>Skilled in creating interactive web applications using JavaScript.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaReact className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">ReactJS</h3>
              <p>Developing dynamic user interfaces with ReactJS and its ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Soft Skills:</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaPeopleArrows className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Teamwork</h3>
              <p>Strong ability to work collaboratively in diverse team environments.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaLightbulb className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Creativity</h3>
              <p>Creative problem-solving to deliver efficient and innovative solutions.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaHandshake className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Communication</h3>
              <p>Excellent communication skills for effective interaction and presentations.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#072638] text-white rounded-lg shadow-md">
            <FaClock className="text-5xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Time Management</h3>
              <p>Efficiently balancing tasks and meeting deadlines under pressure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
