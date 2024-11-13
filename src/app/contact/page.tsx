'use client';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!message) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto w-full p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row bg-[#072638] text-[#f1c886] rounded-lg shadow-lg">
      {/* Left Side - Contact Form */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4 text-[#f1c886]">Get in Touch</h1>
        <p className="text-lg mb-8">We&#39;d love to hear from you. Please fill out the form below to send us a message.</p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#f1c886]">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-[#f1c886]" />
              <a href="mailto:qurratnafees02@gmail.com" className="text-lg hover:text-white transition duration-200">qurratnafees02@gmail.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-[#f1c886]" />
              <a href="tel:+923302413208" className="text-lg hover:text-white transition duration-200">+92 3302413208</a>
            </li>
            <li className="flex items-center space-x-2">
              <Linkedin className="w-5 h-5 text-[#f1c886]" />
              <a href="https://www.linkedin.com/in/syeda-qurrat1991" className="text-lg hover:text-white transition duration-200">www.linkedin.com/in/syeda-qurrat1991</a>
            </li>
            <li className="flex items-center space-x-2">
              <Github className="w-5 h-5 text-[#f1c886]" />
              <a href="https://github.com/SyedaQurrat" className="text-lg hover:text-white transition duration-200">https://github.com/SyedaQurrat</a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full p-3 bg-gray-800 text-[#f1c886] border border-gray-700 rounded-lg focus:ring focus:ring-sky-500 focus:border-sky-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-3 bg-gray-800 text-sky-100 border border-gray-700 rounded-lg focus:ring focus:ring-sky-500 focus:border-sky-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full p-3 bg-gray-800 text-sky-100 border border-gray-700 rounded-lg focus:ring focus:ring-sky-500 focus:border-sky-500 rows=5"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#f1c886] hover:text-white font-bold text-[#072638] rounded-lg transition duration-300"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-lg mt-4 text-center text-green-400">Message sent successfully!</p>
          )}
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 mt-10 lg:mt-0 lg:ml-10 flex items-center justify-center">
        <div className="w-full h-5/6 mt-28 relative">
          <Image
            src='/images/image-6.png'
            alt="Contact Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
