import React from 'react';
import './App.css';
import HoverCard3D from './components/3DHoverCard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/3d_hover_card" component={HoverCard3D}/>
      </Switch>
    </Router>
    );
}

export default App;
