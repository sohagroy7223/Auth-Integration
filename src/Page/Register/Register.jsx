import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl text-center font-bold">Register now!</h1>
      <div className="card-body">
        <form className="fieldset">
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
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          already have an account?{" "}
          <Link className="text-blue-500 font-bold underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
