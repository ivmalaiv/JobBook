import "./Login.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Login = ({ isToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const getEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const logIn = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.accessToken
          ? localStorage.setItem("token", data.accessToken)
          : setError(true);
        data.accessToken && isToken(true);
      });
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <div className="Login">
      <div className="input-wrapper">
        <input
          id="email"
          type="email"
          placeholder="email"
          onChange={getEmail}
        ></input>
        <input
          id="password"
          type="password"
          placeholder="password"
          onChange={getPassword}
        ></input>
        {error && <p style={{ color: "red" }}>Wrong credentials!</p>}

        <button onClick={logIn}>Log in</button>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
