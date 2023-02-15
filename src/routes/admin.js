import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Project from "../components/project/Project";
import ShowProject from "../components/project/ShowProject";
import UsersList from "../components/users/UsersList";

export default (
  <>
    <Route index element={<Dashboard />}/>
    <Route path="projects" element={<Project />}>
      <Route path=":id" element={<ShowProject />} />
    </Route>
    <Route path="users" element={<UsersList />} />
  </>
);
