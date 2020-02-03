import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";

import Home from "./Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ManageProfile from "./components/ManageProfile";

import { auth } from "./firebase";

export default function App() {
  const topNav = React.createRef();
  const routerView = React.createRef();
  const footer = React.createRef();
  const app = React.createRef();

  const [user, setUser] = useState(null);

  const logOutHandler = () => {
    auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    let authStateListener = auth.onAuthStateChanged.bind(auth);
    authStateListener &&
      authStateListener(async user => {
        if (auth.currentUser) {
          setUser({
            token: await auth.currentUser.getIdToken(true),
            email: user.email
          });
        }
      });
    routerView.current.style.minHeight = `${app.current.offsetHeight -
      (topNav.current.offsetHeight + footer.current.offsetHeight) -
      1}px`;
    return function cleanup() {
      authStateListener = null;
    };
  }, [user && user.email]);

  return (
    <Router>
      <div ref={app} className="app" style={{ height: "100%" }}>
        <div
          ref={topNav}
          className="top-nav d-flex flex-column flex-md-row align-items-center p-3 border-bottom"
        >
          <h5
            className="my-0 mr-md-auto font-weight-normal"
            style={{ color: "#000" }}
          >
            <Link
              className="p-2 text-dark text-dark"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Jestack Project
            </Link>
          </h5>
          {user && (
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark text-dark" to="/profile">
                Profile
              </Link>
            </nav>
          )}
          {!user && (
            <React.Fragment>
              <Link className="btn btn-link" to="/login">
                Log in
              </Link>
              <Link className="btn btn-outline-primary" to="/sign-up">
                Sign Up
              </Link>
            </React.Fragment>
          )}
          {user && (
            <a
              className="btn btn-link"
              style={{ marginRight: "5px" }}
              onClick={logOutHandler}
            >
              Log out
            </a>
          )}
        </div>
        <div ref={routerView} className="router-view">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/login"
              render={props => {
                if (!user) {
                  return <Login {...props} />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              path="/profile"
              render={props => {
                if (user) {
                  return <ManageProfile user={user} {...props} />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}
            ></Route>
            <Route
              path="/sign-up"
              render={props => {
                if (!user) {
                  return <SignUp {...props} />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            ></Route>
          </Switch>
        </div>
        <footer ref={footer} className="footer">
          Jetcake Test Project
        </footer>
      </div>
    </Router>
  );
}
