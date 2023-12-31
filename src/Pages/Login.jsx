import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "../config/firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const navigate = useNavigate();

  const loginEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Loged in successfully");
        navigate("/messenger");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("could not logged in!");
      });
  };
  return (
    <>
      <h1 className="text-center facebook-text">facebook</h1>
      <h2 className="text-center ma-b-1-5rem">Log in into your account</h2>

      <div className="login-container">
        <div className="block">
          <div className="single-input ma-b-1-5rem">
            <input
              className="input-box"
              type="email"
              autoFocus
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email address"
            />
          </div>

          <div className="single-input ma-b-1-5rem">
            <input
              className="input-box"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>

          <input
            onClick={loginEmail}
            type="submit"
            value="Log In"
            className="ma-b-1-5rem width-10rem sign-up-btn"
          />
        </div>
        <div className="foot-note">
          <p>Do not have an account? </p>
          <button className="width-20rem log-in-rec">
            {" "}
            <Link to="/signup">Sign-up</Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
