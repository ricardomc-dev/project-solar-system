import React, { Component } from "react";
import Title from "./Title";
import planets from "../data/planets";
import PlanetCard from "./PlanetCard";
import "./SolarSystem.css";

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" id="solar-system">
          {planets.map((item) => (
            <PlanetCard
              key={item.name}
              planetName={item.name}
              planetImage={item.image}
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
