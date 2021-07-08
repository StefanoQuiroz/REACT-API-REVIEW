import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import OtherPage from './views/OtherPage';
import AnOtherpage from './views/AnOtherpage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={AnOtherpage} path="/:id/:color/:background"/>
          <Route component={OtherPage} path="/:id"/>
          <Route component={Home} path="/"/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

/* Ver por qué repite el 2x el welcome*/