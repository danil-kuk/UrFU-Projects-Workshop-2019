import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import CustomersInfo from "./pages/CustomersInfo";
import CoursesDiagrams from "./pages/CoursesDiagrams";
import CoursesDescription from "./pages/CoursesDescription";
import PrePresentation from "./pages/PrePresentation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students" component={Students} />
            <Route path="/customers" component={CustomersInfo} />
            <Route path="/courses-description" component={CoursesDescription} />
            <Route path="/courses-diagrams" component={CoursesDiagrams} />
            <Route path="/pre-presentation" component={PrePresentation} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
