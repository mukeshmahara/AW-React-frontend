import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Project from "./components/project/Project";

import { Suspense } from "react";
import Layout from "./layouts/Layout";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import admin from "./routes/admin";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./components/NotFound";
import Team from "./components/team/Team";
import NewProject from "./components/project/NewProject";

function App() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedin);
  console.log(isLoggedIn, "login");
  const user = useSelector((state) => state.users.user);

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="projects" element={<Project />}>
            <Route path="new_projects" element={<NewProject />} />

          </Route>

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to={"/admin"} /> : <Login />}
          />

          <Route
            path="/admin"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Layout />
              </PrivateRoute>
            }
          >
            {admin}
          </Route>
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </Suspense>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
