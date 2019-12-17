import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Students from "./pages/Students";
import CoursesDiagrams from "./pages/CoursesDiagrams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/customers" component={Customers} />
            <Route path="/students" component={Students} />
            <Route path="/courses-diagrams" component={CoursesDiagrams} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
