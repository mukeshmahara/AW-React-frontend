import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { ErrorMessageHandler } from "../_helper/_methods";
import { userLogin } from "../_redux/slices/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state?.users?.logginError?.error);
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: {} });

  const handleLogin = async (data) => {
    setLoginError(message);
    let formData = {
      auth: {
        email: data.email,
        password: data.password,
      },
    };
    dispatch(userLogin(formData, navigate));
  };
  const handleChange = () => {
    setLoginError("");
  };

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 border sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-5 space-y-8 border rounded shadow-lg">
        <div>
          <Link to={"/"}>
            <img
              className="h-24 p-3 mx-auto border rounded-full shadow-lg "
              src="logo_transparent.png"
              alt="MK Technology"
            />
          </Link>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm ">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: "Please enter your email." })}
                // required
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Please enter your password.",
                })}
                onChange={handleChange}
                // required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <p className="text-red-500 duration-300 ease-in fade-in-error">
            {loginError}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full my-4 bg-gray-200 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            Or
          </div>
        </div>
        <div className="p-2 border rounded hover:bg-indigo-50">
          <div
            className="flex items-center justify-center text-lg"
            role="button"
            aria-disabled="false"
            tabIndex="0"
          >
            <svg viewBox="0 0 20 20" className="h-5 mx-3 text-center ">
              <g>
                <path
                  d="M19.9996 10.2297C19.9996 9.54995 19.9434 8.8665 19.8234 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9996 13.2722 19.9996 10.2297Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M10.2002 20.0003C12.9518 20.0003 15.2723 19.1147 16.963 17.5862L13.6753 15.0875C12.7606 15.6975 11.5797 16.0429 10.2039 16.0429C7.54224 16.0429 5.28544 14.2828 4.4757 11.9165H1.08301V14.4923C2.81497 17.8691 6.34261 20.0003 10.2002 20.0003Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M10.2002 3.95756C11.6547 3.93552 13.0605 4.47198 14.1139 5.45674L17.0268 2.60169C15.1824 0.904099 12.7344 -0.0292099 10.2002 0.000185607C6.34261 0.000185607 2.81497 2.13136 1.08301 5.51185L4.47195 8.08764C5.27795 5.71762 7.53849 3.95756 10.2002 3.95756Z"
                  fill="#EA4335"
                ></path>
              </g>
            </svg>
            Continue with Google
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
