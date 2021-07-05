import React from 'react';
import './App.css';
import PageOne from './views/PageOne';
import PageTwo from './views/PageTwo';
import PageHome from './views/PageHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={PageTwo} path="/page-two/:id"/>
          <Route component={PageTwo} path="/page-two"/>
          <Route component={PageOne} path="/page-one"/>
          <Route component={PageHome} path="/"/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
