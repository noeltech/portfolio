import React from "react";

import "./App.css";
import Header from "./components/Header/index";
import Homepage from "./components/Homepage/index";
import ProjectPage from "./components/ProjectPage/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/projects/:id" component={ProjectPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
