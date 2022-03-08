import "./App.css";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarMini from "./components/NavbarMini";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";

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
            <NavbarMini />
            <Cart />
          </Route>

          <Route path="/">
            <Navbar />
            <NavbarMini />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
