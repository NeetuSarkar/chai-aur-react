import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "An online store built with React and Node.js.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my work and skills.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A task management application built with React and Firebase.",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              {/* Replace the existing Link component with the corrected one */}
              <Link
                to={`/projects/${project.id}`} // Updated route path to match the route in main.jsx
                className="block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
