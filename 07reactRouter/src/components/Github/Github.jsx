import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100 text-white">
      <div className="text-center mb-8">
        <img
          src={data.avatar_url}
          alt="Github Avatar"
          className="rounded-full w-40 h-40 border-4 border-slate-200"
        />
        <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
        <p className="text-lg">Github Followers: {data.followers}</p>
        <p className="text-lg">Public Repositories: {data.public_repos}</p>
      </div>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-200 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
      >
        View Profile
      </a>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/NeetuSarkar");
  return response.json();
};
