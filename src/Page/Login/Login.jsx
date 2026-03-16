import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handelLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl text-center font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handelLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            autoComplete="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          create new account?{" "}
          <Link className="text-blue-500 font-bold underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
