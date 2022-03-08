import "./App.css";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbarmini from "./components/Navbarmini";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import UseStateArray from "./components/UseStateArray";
// import ShortCirEval from "./components/ShortCirEval";
// import BasicForm from "./components/froms/BasicForm";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cart">
            <Navbar />
            <Navbarmini />
            <Cart />
          </Route>

          <Route path="/">
            <Navbar />
            <Navbarmini />
            <Home />
          </Route>
        </Switch>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <UseStateArray /> */}
        {/* <ShortCirEval /> */}
        {/* <BasicForm /> */}
      </div>
    </Router>
  );
}

export default App;
