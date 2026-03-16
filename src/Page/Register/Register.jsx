import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../Firebase/Firebase.init";

const Register = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const [success, setSuccess] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMassage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-3 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl text-center font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handelRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            className="input"
            placeholder="Name"
          />
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
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          already have an account?{" "}
          <Link className="text-blue-500 font-bold underline" to="/login">
            Login
          </Link>
        </p>
      </div>
      {errorMassage && (
        <p className="text-red-600 text-center">{errorMassage}</p>
      )}
      {success && (
        <p className="text-green-600 text-center">User Register successfully</p>
      )}
    </div>
  );
};

export default Register;
