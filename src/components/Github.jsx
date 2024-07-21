import React from "react";

const Github = ({ githubData, repos, followers }) => {
  return githubData.login ? (
    <div className="w-full max-w-6xl bg-gray-900 text-gray-100 p-5 rounded-lg shadow-lg mx-auto  space-y-5">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
        <div className="h-32 w-32 lg:h-40 lg:w-40">
          <img
            src={githubData.avatar_url}
            alt={githubData.name}
            className="w-full h-full object-cover rounded-full border-4 border-blue-400"
          />
        </div>
        <div className="text-center lg:text-left">
          <a href={`https://github.com/${githubData.login}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl font-bold mb-2 block">
            {githubData.name}
          </a>
          <p className="text-gray-300 mb-4">{githubData.bio}</p>
          <p className="text-gray-300">Email: {githubData.email || 'Not available'}</p>
          <p className="text-gray-300">Followers: {githubData.followers}</p>
          <p className="text-gray-300">Public repositories: {githubData.public_repos}</p>
        </div>
      </div>

      <div>
        <h2 className="text-blue-400 text-2xl font-bold mb-4">Repositories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-300 text-xl font-semibold">
                {repo.name}
              </a>
              <p className="text-gray-400 mt-2">{repo.description || 'No description'}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-blue-400 text-2xl font-bold mb-4">Followers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {followers.map((follower) => (
            <div key={follower.id} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img src={follower.avatar_url} alt={follower.login} className="h-10 w-10 rounded-full" />
              <a href={follower.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-300 text-lg font-semibold">
                {follower.login}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default Github;
