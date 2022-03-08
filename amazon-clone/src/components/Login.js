import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://th.bing.com/th/id/R70d71a49e1e15ae0b2f3c3de38ded5ee?rik=cXxW%2bMwvKNLu0w&riu=http%3a%2f%2fwww.clickbank.com%2fwp-content%2fuploads%2f2016%2f05%2famazon_logo.png&ehk=HYVYXmD9P04jx1EhQYsGiA7JQgAGxSafD03c4rs4NjI%3d&risl=&pid=ImgRaw"
        />
      </Link>
      <div className="login__form">
        <form>
          <div className="login__email">
            <h2>Email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__password">
            <h2>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={signIn}>Sign In</button>
          <button onClick={register}>Sign up </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
