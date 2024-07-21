import axios from "axios";
import { useState } from "react";
import Github from "./components/Github";

function App() {
  const [data, setData] = useState({});
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [username, setUsername] = useState("");
  const url = `https://api.github.com/users/${username}`;

  const GithubId = (event) => {
    if (event.key === "Enter") {
      if (username) {
        axios
          .get(url)
          .then((res) => {
            if (res.data) {
              setData(res.data);

              axios
                .get(res.data.repos_url)
                .then((reposRes) => {
                  setRepos(reposRes.data);
                })
                .catch((error) => {
                  console.error("Error fetching repositories:", error);
                  alert("An error occurred while fetching repositories.");
                });

              axios
                .get(`${url}/followers`)
                .then((followersRes) => {
                  setFollowers(followersRes.data);
                })
                .catch((error) => {
                  console.error("Error fetching followers:", error);
                  alert("An error occurred while fetching followers.");
                });
            } else {
              alert("No data found for the provided username.");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            alert(
              "An error occurred while fetching data. Please try again later."
            );
          });
        setUsername(""); // Clear username after making the request
      } else {
        alert("Please provide a username.");
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="text-center">
        <h1 className="text-gray-100 text-5xl font-bold p-8">
          Github Id Finder
        </h1>
        <div class="flex items-center justify-center p-10">
          <div class="relative w-[250px] font-mono">
            <input
              className="w-full p-2 text-xl font-bold text-black bg-white border-4 border-black relative overflow-hidden rounded-none outline-none transition-all duration-300 ease-in-out shadow-[5px_5px_0px_#000,10px_10px_0px_#4a90e2] placeholder:text-gray-400 placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:opacity-0 focus:border-[#4a90e2] focus:animate-focus-pulse focus:glitch"
              type="text"
              placeholder="TYPE HERE"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDownCapture={GithubId}
            />
            <label className="absolute left-[-3px] top-[-35px] text-sm font-bold text-white bg-black px-2 py-1 rotate-[-1deg] z-10 transition-all duration-300 ease-in-out focus:animate-label-focus">
              Who you lookin for?
            </label>
          </div>
        </div>
      </div>
      <Github githubData={data} repos={repos} followers={followers} />
    </div>
  );
}

export default App;
