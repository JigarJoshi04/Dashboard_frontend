import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginUserComponent/LoginUserComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
    </div>

    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home}></Route>
    //     <Route exact path="/about" component={About}></Route>
    //     <Route exact path="/contact" component={Contact}></Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
