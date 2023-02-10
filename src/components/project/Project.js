import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchWrapper } from "../../_helper/fetchWrapper";
import { ErrorMessageHandler } from "../../_helper/_methods";

function Project() {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();
  const openProject = (project) => {
    navigate(`/projects/${project.id}`);
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        let res = await fetchWrapper.get("projects");
        setProjects(res.data);
      } catch (error) {
        ErrorMessageHandler(error);
      }
    };
    getProjects();
  }, [0]);

  const searchProject = () => {
    console.log("finding project");
  };

  return (
    <div className="">
      <div className="flex my-4">
        <p className="mx-4 mb-2 text-5xl text-indigo-400">Projects</p>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineSearch fontSize={24} className="mb-2 text-indigo-400" />
          </span>
          <input
            className="block w-full py-3 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for project..."
            type="text"
            name="search"
            onChange={searchProject}
          />
        </label>
      </div>
      <hr />

      {projects.map((item) => {
        <>{item.name}</>;
        return (
          <div
            className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50 "
            key={item.id}
            onClick={() => openProject(item)}
          >
            <div className="my-4 ">
              <img
                src={
                  "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" ||
                  item?.attributes?.thumbnail
                }
                className="bg-red-900 rounded shadow-lg"
              />
              <p className="my-3 text-justify">{item.attributes.description}</p>
            </div>
            <span className="text-right">
              <hr />
              <p className="italic">
                <b>Owner: </b>
                {item.attributes.ownerName}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
