import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl text-center font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handelLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
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
