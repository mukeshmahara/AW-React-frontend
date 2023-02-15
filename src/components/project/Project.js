import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWrapper } from "../../_helper/fetchWrapper";
import { ErrorMessageHandler } from "../../_helper/_methods";
import { fetchProjects } from "../../_redux/slices/project";

function Project() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openProject = (project) => {
    navigate(`${project.id}`);
  };

  useEffect(() => {
    const getProjects = () => {
      dispatch(fetchProjects("projects"));
    };
    getProjects();
  }, []);

  const projects = useSelector((state) => state.projects.projects.projects);

  const searchProject = () => {
    console.log("finding project");
  };

  return (
    <div className="">
      <div className="flex justify-between my-4">
        <div className="flex ">
          <p className="mx-4 mb-2 text-5xl text-indigo-400">Projects</p>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineSearch fontSize={24} className="mb-2 text-indigo-400" />
            </span>

            <input
              className="py-3 pr-3 bg-white border border-indigo-300 rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 pl-9 focus:outline-none focus:border-indigo-300 focus:ring-indigo-300 focus:ring-1 sm:text-sm"
              placeholder="Search for project..."
              type="text"
              name="search"
              onChange={searchProject}
            />
          </label>
        </div>

        <div className="">
          <button
            type="button"
            className="mx-4 text-indigo-100 bg-green-700 border rounded hover:text-indigo-50 hover:bg-green-800 focus:border-indigo-50 focus:ring-1 focus:outline-none"
          >
            <AiOutlinePlus size={48} className="" />
          </button>
        </div>
      </div>

      <hr />

      {Array.isArray(projects)
        ? projects.map((item) => {
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
                  <p className="my-3 text-justify">
                    {item.attributes.description}
                  </p>
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
          })
        : "No project Availiable"}
    </div>
  );
}

export default Project;
