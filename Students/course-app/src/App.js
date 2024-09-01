// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from './components/courselist';
import CourseDetails from './components/coursedetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={CourseList} />
          <Route path="/course/:id" component={CourseDetails} />
          <Route path="/dashboard" component={StudentDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;