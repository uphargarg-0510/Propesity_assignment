// src/App.js

import React, { useState } from "react";
import Films from "./components/Films";
import People from "./components/People";
import Species from "./components/Species";
import Starships from "./components/Starship";
import Vehicles from "./components/Vehicle";
import Planets from "./components/Planet";
import './App.css';

function App() {
  const [film, chkfilm] = useState(true);
  const [people, chkpeople] = useState(false);
  const [planet, chkplanet] = useState(false);
  const [species, chkspecies] = useState(false);
  const [starship, chkstartship] = useState(false);
  const [vehicle, chkvehicle] = useState(false);

  const defaultfunctions = () => {
    chkfilm(false);
    chkpeople(false);
    chkplanet(false);
    chkspecies(false);
    chkstartship(false);
    chkvehicle(false);
  };

  const filmsfunction = () => {
    defaultfunctions();
    chkfilm(true);
  };

  const peoplefunction = () => {
    defaultfunctions();
    chkpeople(true);
  };

  const speciesfunction = () => {
    defaultfunctions();
    chkspecies(true);
  };

  const vehiclefunction = () => {
    defaultfunctions();
    chkvehicle(true);
  };
  const planetfunction = () => {
    defaultfunctions();
    chkplanet(true);
  };
  const starshipfunction = () => {
    defaultfunctions();
    chkstartship(true);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div onClick={filmsfunction} className={film ? "active" : ""}>
          Films
        </div>
        <div onClick={peoplefunction} className={people ? "active" : ""}>
          People
        </div>
        <div onClick={planetfunction} className={planet ? "active" : ""}>
          Planets
        </div>
        <div onClick={speciesfunction} className={species ? "active" : ""}>
          Species
        </div>
        <div onClick={starshipfunction} className={starship ? "active" : ""}>
          Starships
        </div>
        <div onClick={vehiclefunction} className={vehicle ? "active" : ""}>
          Vehicles
        </div>
      </div>

      <div className="content">
        {film ? <Films /> : people ? <People /> : planet ? <Planets /> : species ? <Species /> : starship ? <Starships /> : vehicle ? <Vehicles /> : <></>}
      </div>
    </div>
  );
}

export default App;
