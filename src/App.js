import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import Project from "./components/project/project";
import Registration from "./components/Registration"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
