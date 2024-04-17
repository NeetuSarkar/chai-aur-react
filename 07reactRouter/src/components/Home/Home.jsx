import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/imageprofile.jpeg";
import "./home.css";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 relative flex items-center justify-center flex-col">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full mb-8 object-cover object-center border-4 border-slate-200"
        />
        <div className="text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-slate-300 mb-4 a"
            style={{ animation: "slideInName 1s forwards" }}
          >
            HEY, I'M <span className="text-slate-200">NEETU SARKAR</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Result-driven Web Developer crafting Websites and Web Apps for
            success. Let's build something great together!
          </p>
          <Link
            to="/projects"
            className="bg-slate-200 hover:bg-blue-400  text-slate-300 font-semibold py-3 px-8 rounded-lg inline-block transition duration-300 ease-in-out"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-8 md:w-1/2 md:pl-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-8">
            About Me
          </h2>
          <p className="text-base md:text-lg text-slate-300">
            Hi, I'm <span className="text-slate-200">Neetu Sarkar</span>, a
            passionate Web Developer and Software Engineer with expertise in
            front-end and back-end technologies. I specialize in building
            responsive and user-friendly web applications using modern
            frameworks like React.js and Node.js. With a strong foundation in
            software engineering principles, I strive to create efficient and
            scalable solutions to meet the needs of clients and users.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-300 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Have a project in mind or just want to say hi? Feel free to reach
            out to me.
          </p>
          <Link
            to="/contact"
            className="bg-slate-200 hover:bg-blue-400 text-slate-300 font-semibold py-3 px-8 rounded-lg inline-block transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
