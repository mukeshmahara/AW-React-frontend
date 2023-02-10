import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Project from "./components/project/Project";
import Team from "./components/team/Team";
import Dashboard from "./components/Dashboard";
import UsersList from "./components/users/UsersList";
import { Suspense } from "react";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Project />} />
            <Route path="team" element={<Team />} />
            <Route path="users" element={<UsersList />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
