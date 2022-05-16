import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => {
      navigate('/')
    }).catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if  (auth) {
        navigate('/');
      }
    }).catch(error => alert(error.message))

  }

  return (
    <div className="flex flex-col items-center bg-white h-full">
      <Link to="/">
        <img
          className="mt-5 mb-5 object-contain w-24 mx-auto"
          src="https://w7.pngwing.com/pngs/738/965/png-transparent-web-development-web-design-software-development-web-developer-web-design-blue-angle-web-design.png"
          alt=""
        />
      </Link>

      <div className="w-80 h-fit flex flex-col rounded-md border border-gray-400 p-5">
        <h1 className="text-3xl font-bold mb-5 text-center">Sign In</h1>

        <form>
          <h5 className="mb-1 font-semibold">E-mail</h5>
          <input className="bg-gray-400 mb-2.5 w-full h-8" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>

          <h5 className="mb-1 font-semibold">Password</h5>
          <input className="bg-gray-400 mb-2.5 w-full h-8" type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>

          <button onClick={signIn} type="submit" className="bg-sky-300 hover:bg-green-500 font-bold rounded w-full border-none p-2.5 my-3  hover:translate-y-1 hover:scale-100 transiton hover:transition-all ease-in-out duration-300">Sign In</button>
        </form>

        <p className="my-3">
              By signing in you agree to <span className="text-red-500 font-semibold font-serif">The Farm's</span> Conditions of Use & Sale.
        </p>

        <button onClick={register} className="bg-yellow-500 hover:bg-pink-300 font-bold rounded w-full border-none p-2 my-3  hover:translate-y-1 hover:scale-100 transiton hover:transition-all ease-in-out duration-300">Create A New Account</button>

      </div>
    </div>
  );
}

export default Login;
