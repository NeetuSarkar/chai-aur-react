import React from "react";
import { Link } from "react-router-dom";
import youtubeClone from "../../assets/Screenshot (21).png";
import ConsciousFitness from "../../assets/Screenshot (22).png";
import weatherApp from "../../assets/Screenshot (23).png";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Youtube Clone",
      description: "A Clone of YouTube, using ReactJS and YouTube API.",
      imageUrl: youtubeClone,
      link: "https://yourstubee.netlify.app",
    },
    {
      id: 2,
      title: "Conscious Fitness",
      description: "A personal Gym Trainer, where you can explore Exercises.",
      imageUrl: ConsciousFitness,
      link: "https://conscious-fitness.netlify.app",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A Weather App, using ReactJs and openWeather API",
      imageUrl: weatherApp,
      link: "https://weatherappnee.netlify.app",
    },
  ];

  return (
    <div className="mx-auto py-10 bg-slate-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-200">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-300 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-slate-50">
                {project.title}
              </h2>
              <p className="text-slate-100">{project.description}</p>
              <a
                href={project.link} // Use project.link instead of projects.link
                target="_blank" // Open link in new tab
                rel="noopener noreferrer" // Add rel attribute for security
                className="block mt-4 bg-slate-200 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
