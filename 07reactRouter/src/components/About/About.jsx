import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/WhatsApp Image 2024-04-15 at 00.49.23.jpeg"; // Import the image
import "./about.css";

const skillsData = [
  { name: "Web Development" },
  { name: "UI/UX Design" },
  { name: "JavaScript" },
  { name: "React" },
  // Add more skills and percentages as needed
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-slate-100 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 p-11 lg:ml-12 mb-8 lg:mb-0 flex-shrink-0">
          <img
            src={profileImage} // Use the imported image
            alt="Your Name"
            className="w-full rounded-lg object-cover lg:object-top"
            style={{ marginTop: "-50%" }} // Apply negative margin-top to crop 50% from the top
          />
        </div>
        <div
          className="lg:w-1/2 px-8"
          style={{ animation: "slideIn 1s forwards" }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left"
            style={{ animation: "slideInName 1s forwards" }}
          >
            <span className="text-gray-300">Neetu</span>{" "}
            <span className="text-slate-200">Sarkar</span>
          </h2>

          <p
            className="text-lg text-slate-300 mb-8 text-center lg:text-left"
            style={{ animation: "slideIn 1s forwards " }}
          >
            I'm a skilled Full Stack Web Developer specializing in React.js,
            adept at tackling complex challenges with a flair for innovation.
            Equipped with expertise in data structures and algorithms, I aspire
            to excel in top tech firms, contributing to groundbreaking projects.
            My passion lies in crafting seamless user experiences and optimizing
            backend functionalities. Eager to join dynamic teams and drive
            impactful solutions in the ever-evolving landscape of software
            development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-4 text-center text-slate-200">
            Skills
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.map((skill, index) => (
              <li
                key={index}
                className="relative py-2 px-4 bg-slate-300 rounded-full text-center hover:bg-slate-200"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-4 text-center text-slate-200">
            Education
          </h3>
          <div className="flex flex-col space-y-4">
            <div className="bg-slate-300 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 text-slate-100">
                  Bachelor's Degree in Computer Science
                </h4>
                <p className="text-sm text-gray-700">
                  Parul Institute of Engineering and Technology
                </p>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-gray-700">Duration: 2020 - 2024</p>
                <p className="text-gray-600">Pursuing</p>
              </div>
            </div>
            <div className="bg-slate-300 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 ">
                  Senior Secondary School
                </h4>
                <p className="text-sm text-gray-700">
                  D.A.V Senior Secondary School
                </p>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-gray-700">Duration: 2017 - 2019</p>
                <p className="text-gray-600">Passed</p>
              </div>
            </div>
            <div className="bg-slate-300 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 ">
                  High School
                </h4>
                <p className="text-sm text-gray-700">
                  Saheed Laxman Nayak Public School
                </p>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-gray-700">Duration: 2004 - 2017</p>
                <p className="text-gray-600">Passed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-4 text-center text-slate-200">
            Experience
          </h3>
          <div className="flex flex-col space-y-8">
            <div className="bg-slate-300 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 ">
                  Business Development Executive
                </h4>
                <p className="text-sm text-gray-700">Skolar Edu Tech Pvt Ltd</p>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-gray-700">
                  Duration: Dec 2023 - Feb 2023
                </p>
                <p className="text-gray-600">Short-term contract</p>
              </div>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <div className="text-center py-5  bg-slate-100">
        <h3 className="text-2xl font-semibold mb-4 text-center text-slate-300">
          If you want to develop something, Feel free to Contact me
        </h3>
        <Link
          to="/contact"
          className="bg-slate-200 hover:bg-blue-400 text-slate-300 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default About;
