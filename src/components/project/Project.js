import React, { useEffect } from "react";
import {
  AiFillCopyrightCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWrapper } from "../../_helper/fetchWrapper";
import { ErrorMessageHandler } from "../../_helper/_methods";
import { fetchProjects } from "../../_redux/slices/project";
import SearchBox from "../Reusables/SearchBox";
import Title from "../Reusables/Title";
import ProjectSkeleton from "./skeleton/ProjectSkeleton";

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
          <Title name="Projects" />
          <SearchBox
            placeholder="Search for project..."
            handleSearch={searchProject}
          />
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

      {/* {
        !projects && <ProjectSkeleton />
      } */}

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
                  <div className="flex justify-between mb-3 text-4xl font-extrabold text-center bg-black rounded text-green-50">
                    {item.attributes.title} <AiFillCopyrightCircle />
                  </div>
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
