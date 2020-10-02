import React from "react";
import "./App.css";
import HoverCard3D from "./components/3DHoverCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import RadarLoading from "./components/RadarLoading";
import CustomCard from "./components/Card";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/3d_hover_card" component={HoverCard3D} />
        <Route path="/backdrop" component={Backdrop} />
        <Route path="/radarLoader" component={RadarLoading} />
        <Route path="/card" component={CustomCard} />
      </Switch>
    </Router>
  );
}

export default App;
