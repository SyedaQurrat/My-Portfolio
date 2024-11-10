import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About"
import Skills from "@/components/Skills";
import SliderSection from "@/components/SliderSection";



const HomePage: React.FC = () => {
  const images = [
    '/images/Salon-Website.jpg',
    '/images/Governor-Sindh-Website.jpg',
    '/images/Resume.jpg',
    '/images/To-Do-App.jpg',
    '/images/Assignment-45.jpg',
    '/images/SQl.jpg',
    '/images/foody.jpg',
    '/images/result-Checker app.jpg',
    '/images/Node-Projects.jpg',
    '/images/Expense-Tracker-App.jpg', 
    '/images/word-Counter.jpg',
  ];
  return (
    <div className="bg-[#123042]">
      <HeroSection/>,
      <About/>,
      <Skills/>,
      <SliderSection images={images}/>
    </div>
  );
}

export default HomePage;
