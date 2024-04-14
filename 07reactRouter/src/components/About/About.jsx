import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/WhatsApp Image 2024-04-15 at 00.49.23.jpeg"; // Import the image
import "./about.css";

const skillsData = [
  { name: "Web Development", percentage: 80 },
  { name: "UI/UX Design", percentage: 70 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 75 },
  // Add more skills and percentages as needed
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-100 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 lg:ml-12 mb-8 lg:mb-0 flex-shrink-0">
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
            <span className="text-black">Neetu</span>{" "}
            <span className="text-red-500">Sarkar</span>
          </h2>

          <p
            className="text-lg text-gray-800 mb-8 text-center lg:text-left"
            style={{ animation: "slideIn 1s forwards 0.5s" }}
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.map((skill, index) => (
              <li
                key={index}
                className="relative py-2 px-4 bg-gray-200 rounded-full text-center hover:bg-gray-300"
              >
                {skill.name}
                <span className="absolute top-full left-0 w-full p-2 bg-gray-800 text-white text-center rounded-b-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
                  {skill.percentage}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Education</h3>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-200 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-500">
                  Bachelor's Degree in Computer Science
                </h4>
                <p className="text-sm">
                  Parul Institute of Engineering and Technology
                </p>
              </div>
              <div className="text-sm">
                <p className="mb-1">Duration: 2020 - 2024</p>
                <p className="text-gray-600">Pursuing</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-500">
                  Senior Secondary School
                </h4>
                <p className="text-sm">D.A.V Senior Secondary School</p>
              </div>
              <div className="text-sm">
                <p className="mb-1">Duration: 2017 - 2019</p>
                <p className="text-gray-600">Passed</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-500">
                  High School
                </h4>
                <p className="text-sm">Saheed Laxman Nayak Public School</p>
              </div>
              <div className="text-sm">
                <p className="mb-1">Duration: 2004 - 2017</p>
                <p className="text-gray-600">Passed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Experience
          </h3>
          <div className="flex flex-col space-y-8">
            <div className="bg-gray-200 rounded-lg py-4 px-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-500">
                  Business Development Executive
                </h4>
                <p className="text-sm">Skolar Edu Tech Pvt Ltd</p>
              </div>
              <div className="text-sm">
                <p className="mb-1">Duration: Dec 2023 - Feb 2023</p>
                <p className="text-gray-600">Short-term contract</p>
              </div>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <div className="text-center mt-8 mb-4">
        <Link
          to="/contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default About;
