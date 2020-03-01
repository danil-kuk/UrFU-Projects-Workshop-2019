import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Chronology from './pages/Chronology'
import Students from './pages/Students'
import Curators from './pages/Curators'
import Customers from './pages/Customers'
import CoursesDiagrams from './pages/CoursesDiagrams'
import CoursesDescription from './pages/CoursesDescription'
import Сompetencies from './pages/Сompetencies'
import PrePresentation from './pages/PrePresentation'
import Presentation from './pages/Presentation'
import TeamsResults from './pages/TeamsResults'
import CoursesResults from './pages/CoursesResults'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router basename='/UrFU-Projects-Workshop-2019'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/chronology' component={Chronology} />
            <Route path='/students' component={Students} />
            <Route path='/curators' component={Curators} />
            <Route path='/customers' component={Customers} />
            <Route path='/courses-description' component={CoursesDescription} />
            <Route path='/courses-diagrams' component={CoursesDiagrams} />
            <Route path='/pre-presentation' component={PrePresentation} />
            <Route path='/competencies' component={Сompetencies} />
            <Route path='/presentation' component={Presentation} />
            <Route path='/teams-results' component={TeamsResults} />
            <Route path='/courses-results' component={CoursesResults} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
